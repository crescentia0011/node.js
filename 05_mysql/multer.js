// multer.js
// 한글 (latin1) buffer -> utf8 인코딩

const multer = require("multer"); //멀티파일
const dayjs = require("dayjs"); //날짜모듈
const path = require("path");

//multer 미들웨어 업로드(업로드 경로, 업로드 파일 rename)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const encfile = Buffer.from(file.originalname, "latin1").toString("utf-8");
    const fn = path.basename(encfile, path.extname(encfile));
    const ext = path.extname(encfile);
    const uniqueName = fn + "_" + dayjs().format("YYMMDD_HH시mm분") + ext;
    cb(null, uniqueName);
  },
});

const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const encfile = Buffer.from(file.originalname, "latin1").toString("utf-8");
    const fn = path.basename(encfile, path.extname(encfile));
    const ext = path.extname(encfile);
    const uniqueName = fn + "_" + dayjs().format("YYMMDD_HH시mm분") + ext;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });
const upload2 = multer({ storage: storage2 });

module.exports = { upload, upload2 };
