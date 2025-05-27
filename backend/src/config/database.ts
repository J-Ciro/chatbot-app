import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// const database = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   port: Number(process.env.MYSQLPORT) || 3306,
//   connectionLimit: 10,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const database = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: Number(process.env.MYSQLPORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default database;
