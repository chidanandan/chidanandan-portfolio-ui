import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { registerRoutes } from "../server/routes.js";
import { serveStatic } from "../server/vite.js";

// Load environment variables
dotenv.config();

const app = express();

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
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "100"), // limit each IP to 100 requests per windowMs
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

// Initialize routes
await registerRoutes(app);

// Error handling middleware
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // Log error in production
  if (process.env.NODE_ENV === "production") {
    console.error(`Error ${status}: ${message}`, {
      stack: err.stack,
      timestamp: new Date().toISOString(),
      url: _req.url,
      method: _req.method,
    });
  }

  // Don't expose internal errors in production
  const responseMessage = process.env.NODE_ENV === "production" && status === 500 
    ? "Internal Server Error" 
    : message;

  res.status(status).json({ 
    success: false,
    message: responseMessage,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack })
  });
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  serveStatic(app);
}

// Export the Express app for Vercel
export default app;
