import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendReferralEmail = async (email, name) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Referral Received</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
        }
        .header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid #eeeeee;
        }
        .logo {
            max-width: 180px;
            height: auto;
        }
        .content {
            padding: 30px 20px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #777777;
            border-top: 1px solid #eeeeee;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #0066cc;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 20px;
        }
        .social-links {
            margin-top: 15px;
        }
        .social-icon {
            display: inline-block;
            margin: 0 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="/api/placeholder/180/60" alt="Accredian Logo" class="logo" />
        </div>
        
        <div class="content">
            <h2>Thank You for Your Referral!</h2>
            
            <p>Hello ${name},</p>
            
            <p>We greatly appreciate your trust in Accredian and thank you for your recent referral. Our team has received your recommendation and will review it promptly.</p>
            
            <p>At Accredian, we value connections that help businesses achieve their full potential. Your referral helps us extend our services to more organizations that can benefit from our expertise.</p>
            
            <p>A member of our team will be in touch with your referral within the next 48 hours.</p>
            
            <p>If you have any questions or would like to provide additional information, please don't hesitate to contact us.</p>
            
            <div style="text-align: center;">
                <a href="https://www.accredian.com/contact" class="button">Contact Us</a>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2025 Accredian. All rights reserved.</p>
            <p>31 Business Plaza, Suite 500, Business District, CA 90210</p>
            
            <div class="social-links">
                <a href="#" class="social-icon"><img src="/api/placeholder/24/24" alt="LinkedIn" /></a>
                <a href="#" class="social-icon"><img src="/api/placeholder/24/24" alt="Twitter" /></a>
                <a href="#" class="social-icon"><img src="/api/placeholder/24/24" alt="Facebook" /></a>
            </div>
            
            <p>You're receiving this email because someone referred you to Accredian.</p>
        </div>
    </div>
</body>
</html>`;

  let mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Referral Received",
    html: htmlContent,
  };

  await transporter.sendMail(mailOptions);
};
