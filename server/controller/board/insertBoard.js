const { Board, User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    // ERROR: 미로그인 상태
    console.log("insert Board!!! ", req.session);

    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authorized" });
    }

    try {
      const { title, content } = req.body;
      const userInfo = await User.findOne({
        where: { userId: req.session.userId },
        attributes: ["id", "userId"],
      });

      const result = await Board.create({
        title: title,
        user_id: userInfo.id,
        content: content,
      });

      res.status(201).json({
        message: "Create board!",
        data: {
          userId: userInfo.userId,
          title: result.title,
          content: result.content,
          createdAt: result.createdAt + "+09:00",
          updatedAt: result.updatedAt + "+09:00",
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
