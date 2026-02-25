// excel.js
// 엑셀파일 읽기. readFile
// 시트중에서 첫번째 [0] -> 시트이름 읽기.
// -> json, csv, 메소드.
const xlsx = require("xlsx");
const mysql = require("./index");
require("dotenv").config();

async function excel_run(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  console.log(sheetName);
  const firstSheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(firstSheet);
  console.log(jsonData);
  console.log("함수 시작");

  for (let prof of jsonData) {
    const param = {
      name: prof["이름"],
      email: prof["이메일"],
      phone: prof["연락처"],
      passwd: prof["비밀번호"],
    };

    const result = await mysql.query("insertCustomer", [param]);
    console.log("DB결과:", result);
  }
}
module.exports = { excel_run };
