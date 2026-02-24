//app.js
const express = require("express");
require("dotenv").config();
const mysql = require("./index");
const encrypto = require("./crypto");
const nodemailer = require("./nodemailer");

// .env 환경변수.

const app = express();
app.use(express.json());
app.use(express.static("public"));

// 라우팅.
app.get("/api/customer", async (req, res) => {
  const result = await mysql.query("customerList");
  console.log(result);
  res.json(result);
});

//등록
app.post("/api/customer", async (req, res) => {
  const { name, email, phone, passwd } = req.body;

  // 암호화
  const hashPasswd = await encrypto.createPassword(passwd);

  //배열로 중괄호 쓰고싶으면 sql에서 set으로 바꿔
  const result = await mysql.query("customerInsert", [
    name,
    email,
    phone,
    hashPasswd,
  ]);

  res.json(result);
});
//3. 수정
app.put("/api/customer", async (req, res) => {
  const { name, email, phone, id } = req.body;
  const result = await mysql.query("customerUpdate", [
    { name, email, phone },
    id,
  ]);

  res.json(result);
});

//삭제
app.delete("/api/customer/:id", async (req, res) => {
  const result = await mysql.query("customerDelete", req.body.id);
  res.json(result);
});

// 조회(로그인 id(email), pw(passwd))
app.post("/api/login", async (req, res) => {
  //email 기준으로 조회
  // checkPassword();
  try {
    const { name, email, passwd } = req.body;
    const result = await mysql.query("customerLogin", email);
    if (!result) {
      return res.json({ retCode: "FAIL", message: "실패" });
    }
    console.log(result[0].passwd);
    const match = await encrypto.checkPassword(passwd, result[0].passwd);
    if (match) {
      res.json({ success: true, result: { name: result[0].email } });
    } else {
      res.json({ retCode: "FAIL", message: "매치실패" });
    }
  } catch (err) {
    console.log(err);
  }
});
// 6.메일발송
app.post("/api/mail", async (req, res) => {
  try {
    const { from, to, subject, text } = req.body;
    const html = text
      .split("\n")
      .map((ele) => `<p>${ele}</p>`)
      .join("");

    const result = await nodemailer.send({ from, to, subject, html });

    res.json(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log("server is running...");
});
