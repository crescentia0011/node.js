// db.js
// sql구문 실행
const mysql = require("mysql2/promise"); //promise 기반으로 async await 사용 가능
require("dotenv").config({ path: "../.env" });
// pool 활용.
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = pool;
