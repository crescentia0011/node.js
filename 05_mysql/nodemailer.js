//nodemailer.js
const nodemailer = require("nodemailer");
require("dotenv").config();
// nodemailer 모듈의 createTransport함수 => transport 객체
// 모르면 책 263~4 봐라
// const transport = nodemailer.createTransport({
//   host: "SMTP.gmail.com",
//   service: "gmail",
//   port: 456,
//   secure: false,
//   auth: {
//     user: "crescentia0011@gmail.com",
//     pass: "jjgoxnxjsfmvytkq",
//   },
// });
const config = {
  host: "SMTP.gmail.com",
  service: "gmail",
  port: 456,
  secure: false,
  auth: {
    user: process.env.GOOGLE_MAIL,
    pass: process.env.GOOGLE_PASSWORD,
  },
};

const send = async (data) => {
  return new Promise((resolve, reject) => {
    //메일발송.
    const transporter = nodemailer.createTransport(config);
    transporter.sendMail(data, (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log(data);
      resolve(data);
    });
  });
};

// send({
//   from: "crescentia0011@gmail.com",
//   to: "crescentia0011@gmail.com",
//   html: "<p>파일첨부연습</p>",
//   attachments: [
//     {
//       filename: "딸기.jpg", // 파일명.
//       path: __dirname + "/uploads/" + "딸기.jpg", // 실제파일
//     },
//   ],
// });

// console.log("main send ...");

module.exports = { send };
