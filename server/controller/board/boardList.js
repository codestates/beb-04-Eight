const { Board, User } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  post: async (req, res) => {
    try {
      const { num } = req.body;
      const temp = Number(num);
      console.log("num", temp);
      const { count, rows } = await Board.findAndCountAll({
        
        include: { model: User, attributes: ["userId"] },
        order: [["updatedAt", "desc"]]
      });

      res.status(200).json({
        message: "get board LIST success",
        count: count,
        data: rows,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
