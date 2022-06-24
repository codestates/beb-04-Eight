"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // FK 연결
    await queryInterface.addConstraint("Boards", {
      fields: ["user_id"],
      type: "foreign key",
      name: "user_board_fk",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Boards", "user_board_fk");
  },
};
