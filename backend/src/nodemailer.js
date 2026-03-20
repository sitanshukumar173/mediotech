require("dotenv").config({ path: "../.env" });
const nodemailer = require("nodemailer");

// DEBUG: Check if variables are loading
console.log("Email User:", process.env.USER_GMAIL);
console.log("Password Loaded:", process.env.PASS_GMAIL ? "Yes" : "No");

//  Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Shorthand for smtp.gmail.com, port 465, secure: true
  auth: {
    // Replace these with your actual details
    user: process.env.USER_GMAIL,
    pass: process.env.PASS_GMAIL,
  },
});

// Define the sending function
async function sendMail() {
  try {
    const info = await transporter.sendMail({
      from: '"Maddison" <letmecook771@gmail.com>', // Sender address
      to: "kumarsubh771@gmail.com", // List of receivers
      subject: "Hello from Node.js ✔", // Subject line
      text: "Hello world?", // Plain text body
      html: "<b>Hello world?</b>", // HTML body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// 3. Execute
sendMail();
