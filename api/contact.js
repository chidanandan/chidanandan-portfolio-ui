const { z } = require("zod");

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

// Mock email function
async function sendContactEmail(formData) {
  console.log("Contact form submission received:");
  console.log(`Name: ${formData.name}`);
  console.log(`Email: ${formData.email}`);
  console.log(`Subject: ${formData.subject}`);
  console.log(`Message: ${formData.message}`);
  return true;
}

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

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
};
