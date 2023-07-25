import nodeMailer from "nodemailer";
import {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SERVICE,
  SMTP_MAIL,
  SMTP_PASSWORD,
  SMTP_APP_NAME,
} from "../constants/constants.js";

export const orderStatusMail = async (status, userDetails) => {
  const transporter = nodeMailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    service: SMTP_SERVICE,
    auth: {
      user: SMTP_MAIL,
      pass: SMTP_PASSWORD,
    },
  });
  
  let mailOptions;

switch (status) {
  case "Not Process":
    mailOptions = {
      from: SMTP_MAIL,
      to: userDetails.email,
      subject: "Greetings!",
      html: `Hello <b>${userDetails.name}</b>,<br><br>
      Thank you for placing your order with us. We have received your order and it is currently being processed. We will notify you once the processing is complete and your order is ready to be shipped.<br>
      Thank you for choosing our services!<br><br>
      Best regards,<br>
      <b>${SMTP_APP_NAME}</b>`,
    };

    break;
    
  case "Processing":
    mailOptions = {
      from: SMTP_MAIL,
      to: userDetails.email,
      subject: "Greetings!",
      html: `Hello <b>${userDetails.name}</b>,<br><br>
      We are currently processing your order. You will be notified once your order is shipped. Thank you for your patience and understanding.<br>
      Best regards,<br>
      <b>${SMTP_APP_NAME}</b>`,
    };
    break;
  
  case "Shipped":
    mailOptions = {
      from: SMTP_MAIL,
      to: userDetails.email,
      subject: "Greetings!",
      html: `Hello <b>${userDetails.name}</b>,<br><br>
      Good news! Your order has been shipped. It should be arriving at your specified address soon. Thank you for choosing our services!<br>
      Best regards,<br>
      <b>${SMTP_APP_NAME}</b>`,
    };
    break;
   
  case "Delivered":
    mailOptions = {
      from: SMTP_MAIL,
      to: userDetails.email,
      subject: "Greetings!",
      html: `Hello <b>${userDetails.name}</b>,<br><br>
      Congratulations! Your order has been successfully delivered. We hope you are satisfied with your purchase. If you have any questions or need further assistance, please feel free to reach out to our customer support team.<br>
      Best regards,<br>
      <b>${SMTP_APP_NAME}</b>`,
    };
    break;

  case "Cancel":
    mailOptions = {
      from: SMTP_MAIL,
      to: userDetails.email,
      subject: "Greetings!",
      html: `Hello <b>${userDetails.name}</b>,<br><br>
      We regret to inform you that your order has been cancelled. If you have any concerns or would like more information regarding the cancellation, please contact our customer support team.<br>
      Best regards,<br>
      <b>${SMTP_APP_NAME}</b>`,
    };
    break;

  default:
    // Default case for any other order status
    mailOptions = {
      from: SMTP_MAIL,
      to: userDetails.email,
      subject: "Greetings!",
      html: `Hello <b>${userDetails.name}</b>,<br><br>
      Thank you for your order. We have received your order and we will process your order soon, and we will provide you with further updates via email. If you have any questions or need assistance, please feel free to contact our customer support team.<br>
      Best regards,<br>
      <b>${SMTP_APP_NAME}</b>`,
    };
}



  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending order status Email:", error);
    } else {
      console.log(`Order Status ${status} Email sent sucessfully:`, info.response);
    }
  });
};
