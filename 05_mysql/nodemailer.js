//nodemailer.js
const nodemailer = require("nodemailer");

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
    user: "crescentia0011@gmail.com",
    pass: "jjgoxnxjsfmvytkq",
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

// {
//   from: "crescentia0011@gmail.com",
//   to: "crescentia0011@gmail.com",
//   subject: "메일발송 연습",
//   text: "메일이 잘 발송됐습니까?",
// },

module.exports = { send };
