import * as nodemailer from "nodemailer";

//TODO: nodemailer typing
const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    //TODO: These should be environment variables
    user: "USERNAME",
    pass: "PASSWORD"
  }
})

export const actions = {
  default: async ({request}) => {
    const formData = await request.formData();

    const info = await transporter.sendMail({
      //TODO: These should be environment variables
      to: "nbur4556@gmail.com",
      subject: "Portfolio Message",
      text: `Name: ${formData.get("name")}, email: ${formData.get("email")}, phone: ${formData.get("phone")}, message: ${formData.get("message")}`,
    });

    console.log(`Message sent: ${info.messageId}`)
  },
};