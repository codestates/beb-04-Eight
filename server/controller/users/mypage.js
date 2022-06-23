const { User } = require("../../models");

module.exports = {
  get: async (req, res) => {

    if (!req.session.userId) {
      res.status(400).send({ message: "not authorized" });
    } else {
      const result = await User.findOne({
        where: { userId: req.session.userId },
        attributes: { exclude: ["password", "privateKey"] },
      });
      res.status(200).json({ data: result, message: "ok" });
    }
  },
};
