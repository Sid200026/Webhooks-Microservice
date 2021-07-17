"use strict";

const express = require("express");
const { router: webHookRouter } = require("./routes/api");
const app = express();

app.use("/api", (req, res, next) => {
  // This code can be used to check whether the given user is an admin or not
  // Currently just forwards the request
  next();
});

app.use("/api", webHookRouter);

module.exports = {
  app,
};
