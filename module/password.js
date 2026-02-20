// password.js

const crypto = require("crypto");

const pw = crypto.createHash("sha512").update("test1234").digest("base64");

console.log(pw);
async function createPassword() {
  //salt 생성(달라지는 시드값)
  const salt = await new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        console.log("err=>", err);
        reject(err);
      }
      console.log(buf.toString("base64"));
      resolve(buf.toString("base64")); //salt 변수에 저장
    });
  });
  // console.log(`salt = > ${salt}`);
  // 암호화된 비밀번호.
  crypto.pbkdf2(
    "test1234", // 1)암호화 평문
    salt, //2)salt 값
    100000, //3) 10만번 반복 해시.
    64, //4) 패스워드 길이 지정
    "sha512", //5) 해시함수
    (err, data) => {
      //6) 콜백함수
      if (err) {
        console.log(err);
        return;
      }
      console.log(data.toString("base64"));
    },
  );
}
//salt 생성(달라지는 시드값)

createPassword();
