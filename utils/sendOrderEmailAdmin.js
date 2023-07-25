import nodeMailer from "nodemailer";
import {
  SMTP_APP_NAME,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SERVICE,
  SMTP_MAIL,
  SMTP_PASSWORD,
  SMTP_AdminEmail,
} from "../constants/constants.js";

export const sendOrderEmailAdmin = async (userData) => {
  const transporter = nodeMailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    service: SMTP_SERVICE,
    auth: {
      user: SMTP_MAIL,
      pass: SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: SMTP_MAIL,
    to: SMTP_AdminEmail, // Set the admin's email address here
    subject: "New Order Notification",
    html: `Hello! <br> A new order has been placed by user <b>${userData.name}</b> <br> Thank You.`,
  };

  await transporter.sendMail(mailOptions);
};
