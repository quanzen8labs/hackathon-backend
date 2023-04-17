const bcrypt = require("bcrypt");
// eslint-disable-next-line no-unused-vars
const winstonLogger = require("../../core/logger");
const User = require("@database/models").User;

const checkUser = async (username, password) => {
  const user = await User.findOne({ where: { username: username } }); // status: "Active"
  if (user) {
    const match = await bcrypt.compare(password, user.passwordHash);
    const result = match ? user : undefined;
    return result;
  }
  return undefined;
};

module.exports = { checkUser };
