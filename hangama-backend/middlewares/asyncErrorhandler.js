const boom = require("boom");

const asyncMiddleware = (fn) => (req, res, next) => {
  var message = "Internal server error";

  Promise.resolve(fn(req, res, next)).catch((err) => {
    if (err.message) {
      message = err.message;
    }
    console.error(message, { err, req });
    if (!err.isBoom) {
      console.error(err.message, { err, req });
      return next(boom.badImplementation(err));
    }
    next(err);
  });
};

module.exports = asyncMiddleware;
