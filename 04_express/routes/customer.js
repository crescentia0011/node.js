//router 정보
const router = require("express").Router();
const path = require("path");
const compression = require("compression");

//nodemon test.
// http요청방식 + end point => CRUD 처리 (REST 방식)
router.get(
  "/search",
  (req, res, next) => {
    console.log("middleware 요청");
    next();
  },
  (req, res) => {
    // res.redirect("/");
    // res.download(path.join(__dirname, "./red.jpg"));
    console.log("응답처리중");
    res.json({ retCode: "Success", retMsg: "Server Status 200" });
  },
);

router.post("/add", (req, res) => {
  res.send("Post방식 요청");
});

// GET요청(parameter로 처리.) => req.params 처리가능.
// Post요청(body에 데이터 해석)

router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login page.");
});

//compression()미들웨어 적용 http://localhost:3000/customer/download
router.get("/download", compression(), (req, res) => {
  // res.send("compression() 모듈 적용.");
  res.download(path.join(__dirname, "..", "red.jpg"));
});

router.get("/error", (res, req) => {
  throw new Error("에러발생");
});

module.exports = router; //익스포트
