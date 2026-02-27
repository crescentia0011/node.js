// 컨트롤(라우트 핸들러).
// boardController.js
const boardService = require("../services/boardService");
const jwt = require("jsonwebtoken");

const list = async (req, res) => {
  try {
    const result = await boardService.getList();
    const [rows] = result;
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "서버 내부 에러" });
  }
};
//상세조회
const detail = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await boardService.getDetail(id);

    const authHeader = req.headers.authorization;
    console.log("1. 수신된 헤더:", authHeader); //
    let userData = null;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      try {
        userData = jwt.verify(token, "secret-token");
        console.log("2. 해독된 유저:", userData); //
      } catch (err) {
        console.log("토큰 해독 실패 원인:", err.message);
      }
    }

    res.json({
      user: userData,
      data: rows[0],
    });
  } catch (err) {
    res.status(500).json({ retCode: "FAIL", message: err.message });
  }
};

// 등록(create)
const create = async (req, res) => {
  try {
    const [result] = await boardService.create(req.body);
    res.json(result);
  } catch (err) {
    console.error("DB 에러 발생:", err.message);
    res.status(500).send(err.message);
  }
};

//삭제
const remove = async (req, res) => {
  try {
    const { id } = req.params; // URL에서 게시글 번호 가져옴
    const user = req.user; // 미들웨어 authCheck가 넘겨준 유저 정보
    console.log("컨트롤러에서 확인한 유저 정보:", user);
    // 서비스의 remove 함수를 호출 (아이디와 유저 객체 전달)
    const result = await boardService.remove(id, user);

    // 권한이 없을 경우 서비스가 반환한 "NO_AUTH" 처리
    if (result === "NO_AUTH") {
      return res.status(403).json({
        retCode: "FAIL",
        message: "본인이 작성한 글만 삭제할 수 있습니다.",
      });
    }

    // 삭제 성공 응답
    res.json({ retCode: "OK", message: "삭제 완료" });
  } catch (err) {
    console.error("삭제 컨트롤러 에러:", err.message);
    res.status(500).json({ retCode: "FAIL", message: err.message });
  }
};
module.exports = { list, detail, create, remove };
