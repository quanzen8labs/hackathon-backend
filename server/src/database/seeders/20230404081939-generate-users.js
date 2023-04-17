"use strict";
var bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    let password = await bcrypt.hash("Zen8labs#1", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          firstName: "Super",
          lastName: "Admin",
          username: "superadmin",
          address: "Wakanda",
          phoneNumber: "01000000001",
          email: "superadmin@zen8labs.com",
          passwordHash: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstName: "Admin",
          lastName: "Admin",
          username: "admin",
          address: "Wakanda",
          phoneNumber: "01000000002",
          email: "admin@zen8labs.com",
          passwordHash: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          firstName: "User",
          lastName: "User",
          username: "user",
          address: "Wakanda",
          phoneNumber: "01000000003",
          email: "user@zen8labs.com",
          passwordHash: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
