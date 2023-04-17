const winstonLogger = require("../core/logger");
const { GeneralError } = require("./errors");
// const { v4: uuidv4 } = require("uuid");

const handleError = async (err, req, res, next) => {
  winstonLogger.info(err);
  if (res?.headersSent) {
    return next(err);
  }
  let code = 500;
  if (err instanceof GeneralError) {
    code = err.getCode();
  }

  const correlationId = req?.headers["x-correlation-id"];
  req.log.error(err, { correlationId });
  return (
    res &&
    res.status(code).send({
      correlationId,
      message: err.message,
      status: "error",
      error: { ...err },
    })
  );
};

const handleRequest = async (req, res, next) => {
  return next();
};

module.exports = {
  handleError,
  handleRequest,
};
