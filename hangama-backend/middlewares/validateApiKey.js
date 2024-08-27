require("dotenv").config();

const validateApiKey = (req, res, next) => {
  const apiKey = req.headers["api-key"];
  if (apiKey) {
    if (apiKey === process.env.HANGAMA_API_KEY) {
      next();
    } else {
      res.status(401).send({ error: "Invalid API key." });
    }
  } else {
    res.status(403).send({ error: "API key is missing." });
  }
};

module.exports = validateApiKey;
