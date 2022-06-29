module.exports = {
  post: (req, res) => {
    if (!req.session.userId) {
      return res.status(400).json({ message: "로그아웃 실패" });
    }

    res.status(200).json({ message: "로그아웃 성공" });
    req.session.destroy();
  },
};
