// app.js
const express = require("express");
require("dotenv").config();
const session = require("express-session"); //세션

// 서버 인스턴스
const app = express();
// json body-parser.
app.use(
  session({
    secret: "secret-key", // 아무 문자열 OK
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 30 }, // 세션 만료시간 30분
  }),
);
app.use(express.static("public"));
app.use(express.json());
// 라우팅.
app.use("/api/board", require("./routes/boardRoutes")); //글
app.use("/api/auth", require("./routes/authRoutes")); //회원

// 서버 시작
app.listen(3000, () => {
  console.log("http://localhost:3000 is running");
});
