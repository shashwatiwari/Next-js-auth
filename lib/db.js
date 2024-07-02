require("dotenv").config();
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 40,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: '',
  database: process.env.DB_NAME,
});

// Export a helper function to execute database queries
export async function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve([results]);
    });
  });
}

export default pool;