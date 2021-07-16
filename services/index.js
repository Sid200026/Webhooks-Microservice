"use strict";

const { ServiceBroker } = require("moleculer");
const ApiService = require("moleculer-web");

// Create broker
const broker = new ServiceBroker({
  logger: console,
  cacher: "memory",
  metrics: true,
  validation: true,
});

// Load API Gateway
broker.createService(ApiService);

// Start server
broker.start();