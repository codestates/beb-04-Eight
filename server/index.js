const express = require("express");
const cors = require("cors");
const fs = require("fs");
const https = require("https");
const apiRoutes = require("./routes");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.send("run server");
});
// app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOptions = {
  origin: true,
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true, // 다른 도메인 간 쿠키 사용 허용 (true) (default:false)
};
app.use(cors(corsOptions));

app.use("/api", apiRoutes);

let server;
// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
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
