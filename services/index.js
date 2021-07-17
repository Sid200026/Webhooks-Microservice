"use strict";

const { ServiceBroker } = require("moleculer");
const webHookService = require("./webhook.service");

const broker = new ServiceBroker({
  logger: console,
  cacher: "memory",
  metrics: true,
  validation: true,
  namespace: "dev",
});

// Load API Gateway
broker.createService(webHookService);

// Start server
broker.start();

module.exports = { broker };
