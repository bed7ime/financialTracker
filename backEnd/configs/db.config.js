require("dotenv").config();
// ใส่ path แค่ตอนที่ .env ไม่ได้อยู่ที่ root folder
// console.log(process.env);

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: process.env.dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
