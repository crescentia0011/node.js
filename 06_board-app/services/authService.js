const bcrypt = require("bcrypt");
const authModel = require("../models/memberModel");
const jwt = require("jsonwebtoken");

// 등록(create)
async function signup(data) {
  //
  const hashed = await bcrypt.hash(data.password, 10);
  console.log(hashed);
  data.password = hashed;
  return authModel.createMember(data);
  //
}
//로그인
async function login(loginId, password) {
  const user = await authModel.findId(loginId);
  if (!user) throw new Error("존재하지 않는 사용자입니다.");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("비밀번호가 틀렸습니다.");
  //token발행 -> 암호화 -> 반환.
  const token = jwt.sign(
    {
      member_id: user.member_id,
      loginId: user.login_id,
      role: user.role,
    },
    "secret-token",
    { expiresIn: "1h" },
  );
  console.log(token);
  return {
    token: token,
    loginId: user.login_id,
    name: user.name,
    member_id: user.member_id,
    role: user.role,
  };
}
module.exports = { signup, login };
