//crypto.js
const crypto = require("crypto");
require("dotenv").config();

async function createPassword(plainTxt) {
  const salt = process.env.MYSQL_SALT; // .env에서 읽어옴

  // 비동기 함수 내에서 동기 메서드를 써도 되지만,
  // 호출하는 쪽에서 이 함수를 완료될 때까지 '기다려줘야' 합니다.
  const passwd = crypto.pbkdf2Sync(plainTxt, salt, 100000, 64, "sha512");
  return passwd.toString("base64");
}

// 입력한 비밀번호 vs. 데이터베이스에 저장된 값과 비교.
async function checkPassword(plainTxt, hashPasswd) {
  const hashPasswd1 = await createPassword(plainTxt);
  console.log("새로 생성된 해시:", hashPasswd1);
  console.log("DB 저장된 해시:", hashPasswd);
  return hashPasswd1 === hashPasswd;
}

// const dbPass = `bIkWuRTVd17VH6eiwvOjkn7BilJBd1hJAUa4n9sh/wcY3hFiZWu84CQe/C4B9Rf6dFf2f+2cgPw/55GvJ3Ao6Q==`;

// checkPassword("test1111", dbPass).then((result) => {
//   console.log("결과:", result); // 이제 true가 나옵니다!
// });

module.exports = { createPassword, checkPassword };

// async function test() {
//   const testHash = await createPassword("test1111");
//   console.log("------------------------------------");
//   console.log("입력 비밀번호: test1111");
//   console.log("생성된 해시값:", testHash);
//   console.log("------------------------------------");
// }

// test();
