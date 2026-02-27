// 미들웨어
const jwt = require("jsonwebtoken");

const authCheck = async (req, res, next) => {
  console.log("미들웨어 체크 시작...");

  // 1. 세션 체크
  if (req.session && req.session.user) {
    req.user = req.session.user;
    return next();
  }

  // 2. 세션이 없다면 토큰(Bearer) 확인
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1]; //공백 뒤의 실제 토큰값

    try {
      const decoded = jwt.verify(token, "secret-token");
      req.user = decoded; // 검증된 정보를 req에 담음
      return next();
    } catch (err) {
      console.error("토큰 검증 실패:", err.message);
      return res
        .status(401)
        .json({ retCode: "FAIL", message: "유효하지 않은 토큰." });
    }
  }

  // 3. 세션도 없고 토큰도 없으면 실패
  return res.status(401).json({
    retCode: "FAIL",
    message: "권한이 없음. 로그인 필요.",
  });
};

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader) {
    res.json({ resCode: "FAIL", message: "토큰값이 없음." });
  }
  next();
};
module.exports = { authCheck, verifyToken };
