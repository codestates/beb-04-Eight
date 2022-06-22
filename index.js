const express = require("express");
const usersRouter = require("./routes/user");
// const boardRouter = require("./routes/board");
const cors = require("cors");
const session = require("express-session");
const fs = require("fs");
const https = require("https");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("run server");
});

app.use(
  session({
    secret: "@eight",
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: "localhost",
      path: "/",
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: "none",
      httpOnly: true,
      secure: true, // true: HTTPS 프로토콜 통신에만 쿠키 전송
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "https://localhost:3000",
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true, // 다른 도메인 간 쿠키 사용 허용 (true) (default:false)
};
app.use(cors(corsOptions));

app.use("/users", usersRouter);
// app.use("/board", boardRouter);

let server;
// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  server = https
    .createServer(
      {
        key: fs.readFileSync(__dirname + `/` + "key.pem", "utf-8"),
        cert: fs.readFileSync(__dirname + `/` + "cert.pem", "utf-8"),
      },
      app
    )
    .listen(PORT, () => console.log(`----- 🚀 HTTPS Server is starting on ${PORT} port...`));
} else {
  server = app.listen(PORT, () => console.log(`----- 🚀 HTTP Server is starting on ${PORT} port...`));
}
module.exports = server;
