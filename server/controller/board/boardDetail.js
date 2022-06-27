const { Board, User } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Board.findOne({
        where: { id: id },
        include: [
          {
            model: User,
            attributes: ["userId"],
          },
        ],
      });

      // res로 보낼 data 보기 좋게 정제
      data.dataValues.userId = data.dataValues.User.userId;
      delete data.dataValues.user_id;
      delete data.dataValues.User;

      res.status(200).json({
        message: "get board DETAIL success",
        data: data,
      });
    } catch (err) {
      console.log(err);
    }
  },
  put: async (req, res) => {
    if (!req.session.userId) {
      res.status(401).json({ message: "Not authorized" });
    }

    try {
      const { id } = req.params;
      const { title, content } = req.body;

      const boardInfo = await Board.findOne({
        where: { id: id },
        attributes: ["user_id"],
        include: {
          model: User,
          attributes: ["userId"],
        },
      });

      if (req.session.userId !== boardInfo.User.userId) {
        res.status(403).json({ message: "작성자만 글을 수정할 수 있습니다" });
      }

      const updatedRows = await Board.update(
        {
          title: title,
          content: content,
        },
        {
          where: { id: id },
        }
      );

      res.status(200).json({
        message: "Update board!",
        data: {
          id: id,
          title: title,
          content: content,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
  delete: async (req, res) => {
    console.log("Delete board!");
    res.status(204);
  },
};
