import { fail } from '@sveltejs/kit';
import { FORWARDMAIL_USER, FORWARDMAIL_PASS } from "$env/static/private";
import * as nodemailer from "nodemailer";


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
  contact: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    try {
      await transporter.sendMail({
        to: "nbur4556@gmail.com",
        subject: "Portfolio Message",
        text: ` ${message}
      
        Email: ${email}
        Phone Number: ${phone}

        From ${name}
        `,
      });

      return { success: true }
    } catch (err) {
      return fail(500)
    }
  },
};
