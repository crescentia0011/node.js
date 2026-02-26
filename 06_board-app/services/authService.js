const bcrypt = require("bcrypt");
const authModel = require("../models/memberModel");

// 등록(create)
async function signup(data) {
  //
  const hashed = await bcrypt.hash(data.password, 10);
  console.log(hashed);
  data.password = hashed;
  return authModel.createMember(data);
  //
}
async function login(loginId, password) {
  const user = await authModel.findId(loginId);
  if (!user) throw new Error("존재하지 않는 사용자입니다.");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("비밀번호가 틀렸습니다.");

  return {
    loginId: user.login_id,
    name: user.name,
  };
}
module.exports = { signup, login };
