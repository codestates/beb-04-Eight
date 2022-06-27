const { Board, User } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      const { count, rows } = await Board.findAndCountAll({
        include: { model: User, attributes: ["userId"] },
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
