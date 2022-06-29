const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+09:00", // for writing to database
    dialectOptions: {
      // for reading from database
      // : 날짜를 문자열로 받아온다 -> timezone을 -9시간 할 수 없도록
      charset: "utf8mb4",
      dateStrings: true,
      typeCast: true,
    },
  },
  test: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+09:00",
    dialectOptions: {
      charset: "utf8mb4",
      dateStrings: true,
      typeCast: true,
    },
  },
  production: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+09:00",
    dialectOptions: {
      charset: "utf8mb4",
      dateStrings: true,
      typeCast: true,
    },
  },
};
