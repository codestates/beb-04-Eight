const { Board, User } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      console.log("findAll");
      const { count, rows } = await Board.findAndCountAll({
        include: { model: User, attributes: ["userId"] },
      });

      console.log(rows);
      res.status(200).json({
        message: "success",
        count: count,
        data: rows,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
