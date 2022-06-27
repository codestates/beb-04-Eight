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
    console.log("Update board!");
    res.status(200).json({
      message: "get board DETAIL success",
      data: data,
    });
  },
  delete: async (req, res) => {
    console.log("board detail delete");
    res.status(204);
  },
};
