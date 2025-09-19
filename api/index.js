import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { z } from "zod";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// Force rebuild timestamp: 2025-09-19 16:30

const app = express();

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

// Mock email function for now (you can implement SendGrid later)
async function sendContactEmail(formData) {
  console.log("Contact form submission received:");
  console.log(`Name: ${formData.name}`);
  console.log(`Email: ${formData.email}`);
  console.log(`Subject: ${formData.subject}`);
  console.log(`Message: ${formData.message}`);
  return true; // Simulate successful email sending
}

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'"],
    },
  },
}));

app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000"), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "100"),
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api", limiter);

// Body parsing with size limits
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false, limit: "10mb" }));

// Health check endpoints
app.get("/health", (_req, res) => {
  res.status(200).json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development"
  });
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({ 
    status: "ok", 
    api: "operational",
    timestamp: new Date().toISOString() 
  });
});

// Contact form submission endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const formData = contactFormSchema.parse(req.body);
    
    const emailSent = await sendContactEmail(formData);
    
    if (emailSent) {
      res.json({ success: true, message: "Message sent successfully!" });
    } else {
      res.status(500).json({ success: false, message: "Failed to send message. Please try again." });
    }
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: "Please check your form data",
        errors: error.errors
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error. Please try again later."
      });
    }
  }
});

// Serve static files from dist/public
app.use(express.static('dist/public'));

// Catch-all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/public', 'index.html'));
});

// Error handling middleware
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error(`Error ${status}: ${message}`, {
    stack: err.stack,
    timestamp: new Date().toISOString(),
    url: _req.url,
    method: _req.method,
  });

  const responseMessage = process.env.NODE_ENV === "production" && status === 500 
    ? "Internal Server Error" 
    : message;

  res.status(status).json({ 
    success: false,
    message: responseMessage,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack })
  });
});

export default app;
