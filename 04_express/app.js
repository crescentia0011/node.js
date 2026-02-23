const express = require("express"); //임포트
const app = express(); //인스턴스
const port = 3000;
const fs = require("fs");
const compression = require("compression");
const customerRoute = require("./routes/customer");
const productRoute = require("./routes/product");
const path = require("path");
const session = require("express-session"); //세션
const fileStore = require("session-file-store")(session);
const cors = require("cors");

//session 미들웨어
app.use(
  session({
    secret: "secret-key", // 아무 문자열 OK
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 }, // 세션 만료시간 1시간
    store: new fileStore(), //세션 파일로 저장
  }),
);
app.use(cors()); // CORS 설정 (모든 도메인 허용)
app.use(compression("compression")); //모든 라우팅에 적용
//정적파일 폴더(html,css,js)
app.use(express.static(__dirname + "/public"));
//JSON 형식 데이터 파싱
app.use(express.json());
// body parser 셋업.
app.use(express.urlencoded({ extended: true }));
app.use("/customer/download", compression());

// 라우팅. 요청방식+URL (end point) => 실행할 함수.
app.get("/", (req, res) => {
  const json = JSON.stringify({ id: "user99", name: "홍길동" });
  try {
    const buffer = fs.readFileSync("./index.html", { encoding: "utf8" });
    res.send(buffer);
  } catch (err) {
    console.log(err);
    res.status(500).send("읽기 실패");
  }
  // res.status(200).send("서버실행...");
});

//외부 라우팅정보.
app.use("/customer", customerRoute);
app.use("/product", productRoute);

app.get("/data", (req, res) => {
  res.json({ id: "1001", data: "sample" });
});

// session
app.get("/login", (req, res) => {
  req.session.user = { id: "user99", name: "홍길동" };
  res.send("session에 저장.");
  console.log(req.session.user);
});
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("로그아웃");
});
app.get("/my_info", (req, res) => {
  console.log(req.session.user);
  if (!req.session.user) {
    res.json({ retCode: "NG", retMsg: "No user info" });
    return;
  }
  res.json(req.session.user);
});

//express 에서 에러처리.
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMsg: err.message });
});

// 서버실행.
app.listen(port, () => {
  console.log(`🚀 ${port}번 서버실행... http://localhost:3000`);
});
