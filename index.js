"use strict";

const { app } = require("./app");
const { logger } = require("./utils/logger");
const { assertDatabaseConnectionOk } = require("./utils/validateDB");
const { webhookGetAll, webHookUpdate, webHookDelete } = require("./models/webhook.crud");

// Use .env in development mode, .env.production in production mode
const dotenvfile =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env";
require("dotenv").config({ path: dotenvfile });

// Read the port from the environment file
const PORT = process.env.PORT || 8000;

assertDatabaseConnectionOk();
app.listen(PORT, () => logger.info(`Server listening on Port ${PORT}`));

webhookGetAll()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));