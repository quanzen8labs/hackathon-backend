const { setup: setupCore } = require("./core");
const { init } = require("./modules");
const { handleError, handleRequest } = require("./common/middlewares");
require("module-alias/register");

const PORT = process.env.NODE_PORT || 3000;

const start = async () => {
  const initModules = async (app) => {
    const app2 = init(app);
    return app2;
  };

  const configureRoutes = async (app) => {
    const app2 = await initModules(app);
    app2.use(handleRequest);
    app2.get("/", (req, res) => {
      res.send("Hello World!");
    });
    app2.use(handleError);
    return app2;
  };

  const { app, logger } = await setupCore();

  try {
    await configureRoutes(app);
    app.listen(PORT, async () => {
      logger.info(`Server started on port ${PORT}`);
    });
  } catch (err) {
    logger.error(err.toString());
    handleError(err);
  }
};

start();
