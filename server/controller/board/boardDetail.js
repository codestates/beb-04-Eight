const { Board, User } = require("../../models");
const { checkAccessToken } = require("../../utils/jwt");

module.exports = {
  get: async (req, res) => {
    try {
      const { id } = req.body;
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
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return res.status(401).json({ message: "Not authorized" });
    }

    try {
      const { id } = req.params;
      const { title, content } = req.body;

      const boardInfo = await Board.findOne({
        where: { id: id },
        attributes: ["user_id"],
      });

      const token = authorization.split(" ")[1];
      const decoded = checkAccessToken(token);
      if (decoded.id !== boardInfo.user_id) {
        return res.status(403).json({ message: "작성자만 글을 수정할 수 있습니다" });
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
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return res.status(401).json({ message: "Not authorized" });
    }

    try {
      const { id } = req.params;

      const boardInfo = await Board.findOne({
        where: { id: id },
        attributes: ["user_id"],
      });

      if (!boardInfo) {
        return res.status(404).json({ message: "Not found" });
      }

      const token = authorization.split(" ")[1];
      const decoded = checkAccessToken(token);
      if (decoded.id !== boardInfo.user_id) {
        return res.status(403).json({ message: "작성자만 글을 삭제할 수 있습니다" });
      }

      await Board.destroy({ where: { id: id } });

      res.status(204).send();
    } catch (err) {
      console.log(err);
    }
  },
};
