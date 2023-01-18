const mailer = require("nodemailer");

let transport = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "iamj@gmail.com",
    pass: "zrtyu098",
  },
});

let mesob = {
  from: "iam@gmail.com",
  to: "satwik@gmail.com",
  subject: "For verifying Nodemailer",
  text: "Hello, how are you?   Welcome to Future Adda....Hope you are doing well...and i hope your understood how to send mail using node js package called nodemailer",
};

transport.sendMail(mesob, (error, info) => {
  if (error) {
    console.log("Error Occured");
    console.log(error);
  } else {
    console.log("Mail Sent Successfully");
    console.log(info.response);
  }
});
