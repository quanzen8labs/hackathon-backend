const setup = async () => {
  const logger = require("./logger");
  // const eventEmitter = require("./event-manager").getInstance();
  const app = require("./app");
  // const connectWithDb = require("./mongo");
  return { app, logger };
};

module.exports = { setup };
