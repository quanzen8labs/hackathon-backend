const authRoutes = require("./controller");

const init = async (app) => {
  app.use("/api/auth", authRoutes);
};

module.exports = { init };
