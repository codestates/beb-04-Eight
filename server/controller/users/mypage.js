const { User } = require("../../models");

module.exports = {
  get: async (req, res) => {
    if (!req.session.userId) {
      return res.status(400).json({ message: "not authorized" });
    }

    const result = await User.findOne({
      where: { userId: req.session.userId },
      attributes: { exclude: ["password", "privateKey"] },
    });

    res.status(200).json({ data: result, message: "ok" });
  },
};
