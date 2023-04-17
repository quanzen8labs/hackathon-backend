/* eslint-disable no-unused-vars */
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    return await queryInterface
      .createTable("RolePermissions", {
        roleId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Roles",
            key: "id",
          },
          allowNull: false,
        },
        permissionId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Permissions",
            key: "id",
          },
          allowNull: false,
        },
      })
      .then(() => {
        return queryInterface.sequelize.query(
          "ALTER TABLE RolePermissions ADD PRIMARY KEY (roleId, permissionId)"
        );
      });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("RolePermissions");
  },
};
