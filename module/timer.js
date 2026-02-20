// timer.js
const { logger } = require("./console_class");

const color = {
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  yellow: (text) => `\x1b[33m${text}\x1b[0m`,
};
setTimeout(function () {
  console.log("1초후에 실행");
}, 1000);

const job = setInterval(function () {
  logger.log(new Date() + "에 실행");
}, 1000);

//종료.
setTimeout(() => {
  clearInterval(job);
  logger.log("10회 입력 시 종료");
}, 10000);
