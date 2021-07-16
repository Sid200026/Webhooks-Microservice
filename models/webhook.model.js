"use strict";

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Webhook", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING(2084), // Url limit is 2083 characters
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
  });
};
