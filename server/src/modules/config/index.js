const configRoutes = require("./controller");

const init = async (app) => {
  app.use("/api/config", configRoutes);
};

module.exports = { init };
