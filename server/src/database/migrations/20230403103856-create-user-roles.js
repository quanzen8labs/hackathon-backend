"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    return await queryInterface
      .createTable("UserRoles", {
        roleId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Roles",
            key: "id",
          },
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Users",
            key: "id",
          },
          allowNull: false,
        },
      })
      .then(() => {
        return queryInterface.sequelize.query(
          "ALTER TABLE UserRoles ADD PRIMARY KEY (roleId, userId)"
        );
      });
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("UserRoles");
  },
};
