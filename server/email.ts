import { MailService } from '@sendgrid/mail';

let mailService: MailService | null = null;

if (process.env.SENDGRID_API_KEY) {
  mailService = new MailService();
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
  console.log('SendGrid email service initialized');
} else {
  console.log('Email functionality disabled (SENDGRID_API_KEY not configured)');
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  // If SendGrid is not configured, log the contact form submission instead
  if (!mailService) {
    console.log('Contact form submission received (SendGrid not configured):');
    console.log(`Name: ${formData.name}`);
    console.log(`Email: ${formData.email}`);
    console.log(`Subject: ${formData.subject}`);
    console.log(`Message: ${formData.message}`);
    return false; // Return false to indicate email wasn't sent
  }

  try {
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `;

    const emailText = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const toEmail = process.env.TO_EMAIL || 'chidutramp@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'chidutramp@gmail.com';

    const emailConfig = {
      to: toEmail,
      from: fromEmail, // Must be verified sender in SendGrid
      subject: `Portfolio Contact: ${formData.subject}`,
      text: emailText,
      html: emailHtml,
      replyTo: formData.email
    };
    
    console.log('Attempting to send email with config:', JSON.stringify({
      to: emailConfig.to,
      from: emailConfig.from,
      subject: emailConfig.subject
    }, null, 2));
    
    await mailService.send(emailConfig);
    
    return true;
  } catch (error: any) {
    console.error('SendGrid email error:', error);
    if (error.response && error.response.body && error.response.body.errors) {
      console.error('SendGrid error details:', JSON.stringify(error.response.body.errors, null, 2));
    }
    return false;
  }
}