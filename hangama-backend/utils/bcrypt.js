const bcrypt = require("bcryptjs");

const comparePassword = async (password, storedPassword) => {
  return await bcrypt.compare(password, storedPassword);
};

const createPassword = async (password) => await bcrypt.hash(password, 10);

module.exports = { comparePassword, createPassword };
