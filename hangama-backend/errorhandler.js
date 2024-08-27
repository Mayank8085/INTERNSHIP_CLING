const { isBoom } = require("boom");
const { isCelebrate } = require("celebrate");

// handling errors
const handleError = () => {
  const handleValidationErrors = (err, req, res, next) => {
    const statusCode = 400;
    let details = [];
    if (err.details) {
      err.details.forEach((e) => {
        details.push({
          message: e.message,
          key: e.context.key,
        });
      });
    }

    return res.status(statusCode).json({
      statusCode,
      details,
      error: "Bad Request",
      message: "ValidationError",
    });
  };

  const handleBoomErrors = (err, req, res, next) => {
    const error = err.details ? err.details[0] : err.output.payload;
    const errorStatusCode = err.details ? 400 : err.output.statusCode;
    return res.status(errorStatusCode).json(error);
  };

  const handleOtherErrors = (err, req, res, next) => {
    const statusCode = 500;
    return res.status(statusCode).json({
      statusCode,
      error: err,
      message: "Internal server error",
    });
  };

  const handleServerErrors = (err, req, res, next) => {
    const statusCode = 500;
    return res.status(statusCode).json({
      statusCode,
      message: err.message,
    });
  };

  return (err, req, res, next) => {
    if (process.env.NODE_ENV == "development") console.error("Error", err);
    else console.error("Internal Server Error", { err, req });
    if (isBoom(err)) handleBoomErrors(err, req, res, next);
    else if (err.isValidation) handleValidationErrors(err, req, res, next);
    else if (err.isServer) handleServerErrors(err, req, res, next);
    else handleOtherErrors(err, req, res, next);
  };
};

module.exports = handleError;
