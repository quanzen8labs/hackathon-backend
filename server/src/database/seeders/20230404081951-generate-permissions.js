"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Permissions",
      [
        {
          id: 1,
          resource: "/api/users/detail",
          name: "Get User Detail",
          type: "api",
          isAllowed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Permissions", null, {});
  },
};
