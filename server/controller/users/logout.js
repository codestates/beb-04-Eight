module.exports = {
  post: (req, res) => {
    if (!req.session.userId) {
      res.status(400).send("로그아웃 실패");
    } else {
      res.status(200).send("로그아웃 성공");
      req.session.destroy();
    }
  },
};
