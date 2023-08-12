import * as nodemailer from "nodemailer";
import { FORWARDMAIL_USER, FORWARDMAIL_PASS} from "$env/static/private";

//TODO: nodemailer typing
const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    //TODO: These should be environment variables
    user: FORWARDMAIL_USER,
    pass: FORWARDMAIL_PASS
  }
})

export const actions = {
  default: async ({request}) => {
    const formData = await request.formData();

    try {
      const info = await transporter.sendMail({
        //TODO: These should be environment variables
        to: "nbur4556@gmail.com",
        subject: "Portfolio Message",
        text: `Name: ${formData.get("name")}, email: ${formData.get("email")}, phone: ${formData.get("phone")}, message: ${formData.get("message")}`,
      });
  
      console.log(`Message sent: ${info.messageId}`)
    } catch (err) {
      console.error(err);
    }
  },
};