// memberModel.js

const pool = require("../config/db");

// 글등록(insert).
async function createMember(data) {
  const { loginId, name, password, role } = data;
  const body = [loginId, name, password, role];
  const sql = `
  INSERT INTO tbl_member(login_id,name,password,role)
  VALUES (?,?,?,?)
  `;

  return pool.query(sql, body);
}
// // 아이디로 회원 찾기 (로그인 및 중복 체크용)
async function findId(loginId) {
  const sql = `SELECT * FROM tbl_member WHERE login_id = ?`;
  const [rows] = await pool.query(sql, [loginId]); //필드타입까지 안들고 오려면 []에 넣어라
  return rows[0];
}
// 모듈 export
module.exports = { createMember, findId };
