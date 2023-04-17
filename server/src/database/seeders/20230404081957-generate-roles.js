"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: 1,
          name: "superadmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
