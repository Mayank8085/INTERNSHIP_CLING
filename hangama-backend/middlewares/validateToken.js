const JWT = require("jwt-simple");
const boom = require("boom");

module.exports = async function (req, res, next) {
  var token = req.headers["x-access-token"];
  if (token) {
    const decoded = JWT.decode(token, process.env.SECRET_KEY);
    if (decoded) {
      req.id = decoded.id;
      return next();
    } else {
      res.status(403).send({ error: "Invalid Token" });
    }
  } else {
    res.status(401).send({ error: "Token is missing" });
  }
};
