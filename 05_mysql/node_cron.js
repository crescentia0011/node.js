const cron = require("node-cron"); //작업 스케쥴러
const { logger } = require("./winston");
const nodemailer = require("./nodemailer");

//주기적 실행.
cron.schedule("*/5 * * * * *", () => {
  // console.log(Date.now());
  nodemailer.send({
    from: "crescentia0011@gmail.com",
    to: "crescentia0011@gmail.com",
    subject: "스케줄러 실행",
    text: "node cron 실행",
  });

  logger.info("메일 발송.");
});
