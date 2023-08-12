import * as nodemailer from "nodemailer";
import { FORWARDMAIL_USER, FORWARDMAIL_PASS } from "$env/static/private";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: FORWARDMAIL_USER,
    pass: FORWARDMAIL_PASS,
  },
});

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    try {
      const info = await transporter.sendMail({
        to: "nbur4556@gmail.com",
        subject: "Portfolio Message",
        text: ` ${message}
      
        Email: ${email}
        Phone Number: ${phone}

        From ${name}
        `,
      });

      console.log(`Message sent: ${info.messageId}`);
    } catch (err) {
      console.error(err);
    }
  },
};
