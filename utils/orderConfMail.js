import nodeMailer from "nodemailer";
import {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SERVICE,
  SMTP_MAIL,
  SMTP_PASSWORD,
  SMTP_APP_NAME,
} from "../constants/constants.js";

export const orderConfMail = async (userData) => {
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
    to: userData.email,
    subject: "Greetings!",
    html: `Hello <b>${userData.name}</b>,<br><br>
    Thank you for placing your order with us. We have received your order and will begin processing it shortly. To keep you updated on the status of your order, we will be sending regular email to the email address associated with your account. Please make sure to check your email regularly for order updates.<br>
    Thank you again for choosing our services!<br><br>
    Best regards,<br>
    <b>${SMTP_APP_NAME}</b>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending order confirmation Email:", error);
    } else {
      console.log("Order confirmation Email sent sucessfully:", info.response);
    }
  });
};
