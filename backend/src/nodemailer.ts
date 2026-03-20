require("dotenv").config({ path: "../.env" });
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // Shorthand for smtp.gmail.com, port 465, secure: true
  auth: {
    user: process.env.USER_GMAIL,
    pass: process.env.PASS_GMAIL,
  },
});

//sending
async function sendMail(text: string, html: string, subject: string) {
  try {
    const info = await transporter.sendMail({
      from: '"Maddison" <letmecook771@gmail.com>', // Sender name + address
      to: "kumarsubh771@gmail.com", // List of receivers
      subject: subject, // Subject
      text: subject + "\n" + text, // Plain text body
      html: `<h1>${subject}</h1>${html}`, // HTML body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error occurred:", (error as any).message);
  }
}

export { sendMail };
