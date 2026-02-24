const mysql = require("mysql2");
const sql = require("./sql.js");
require("dotenv").config();

//connection pool
const pool = mysql.createPool({
  connectionLimit: process.env.MYSQL_LIMIT,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

const query = async (alias, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql[alias], values, (error, results) => {
      if (error) {
        console.log(error);
        reject({
          error,
        });
      } else resolve(results);
    }); //콜백함수
  });
};

// async function exe() {
//   const result = await query("customerInsert", [
//     "박우신",
//     "park@email.com",
//     "010-1234-1234",
//   ]);
//   console.log(result);
// }

async function exe() {
  const result = await query("customerList");
  console.log(result);
}
// exe();

module.exports = {
  query,
};
