"use strict";

const sequelize = require("./database");
const modelDefiners = [require("./webhook.model")];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

module.exports = sequelize;
