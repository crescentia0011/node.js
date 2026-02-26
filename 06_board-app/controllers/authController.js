const authService = require("../services/authService");

// 등록(create)
const signup = async (req, res) => {
  try {
    // const { loginId, name, password, role } = req.body;
    // const [rows] = await authService.signup(loginId, name, password, role);
    const result = await authService.signup(req.body);
    // const result = await authService.signup(loginId, name, password, role);
    console.log("가입성공", result);
    res.json({ retCode: "OK" });
  } catch (err) {
    console.error("DB 에러 발생:", err.message);
    res.status(500).send(err.message);
  }
};

// 로그인
const login = async (req, res) => {
  try {
    const { loginId, password } = req.body;
    const user = await authService.login(loginId, password);
    req.session.user = {
      loginId: user.loginId,
      name: user.name,
    };
    console.log("========= 세션 저장 완료 =========");
    console.log("현재 세션 데이터:", req.session.user);
    console.log("세션 ID:", req.sessionID);
    console.log("=================================");
    req.session.save(() => {
      res.json({ retCode: "OK", user: req.session.user });
    });
  } catch (err) {
    console.error("에러:", err.message);

    res.status(401).json({ retCode: "FAIL", message: err.message });
  }
};

module.exports = { signup, login };
