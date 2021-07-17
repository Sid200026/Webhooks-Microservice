"use strict";
const axios = require("axios");
const {
  webhookCreate,
  webHookUpdate,
  webhookGetAll,
  webHookDelete,
} = require("../models/webhook.crud");

const BATCH_SIZE = 3;

const chunkArray = (arr, size) =>
  arr.length > size
    ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
    : [arr];

const getErrorMessage = (err) => {
  if (err.errors) {
    return err.errors.map((error) => {
      let message = "";
      switch (error.validatorKey) {
        case "isUrl":
          message = "Please enter a valid URL";
          break;
        default:
          message = "Something went wrong. Please try again.";
          break;
      }
      return message;
    });
  }
  return "Something went wrong. Please try again.";
};

module.exports = {
  name: "webhooks",
  version: 1,
  actions: {
    async register(ctx) {
      const { targetUrl } = ctx.params;
      if (!targetUrl) {
        return { error: "Error: URL not provided" };
      }
      try {
        const response = await webhookCreate(targetUrl);
        return { id: response.id };
      } catch (err) {
        return { error: getErrorMessage(err) };
      }
    },
    async update(ctx) {
      const { id, newTargetUrl } = ctx.params;
      if (!id) {
        return { error: "Error: ID not provided" };
      }
      if (!newTargetUrl) {
        return { error: "Error: URL not provided" };
      }
      try {
        const response = await webHookUpdate(id, newTargetUrl);
        if (response) {
          return { message: "WebHook updated successfully" };
        } else {
          return { message: "WebHook not found" };
        }
      } catch (err) {
        return { error: getErrorMessage(err) };
      }
    },
    async list(_ctx) {
      return await webhookGetAll();
    },
    async delete(ctx) {
      const { id } = ctx.params;
      if (!id) {
        return { error: "Error: ID not provided" };
      }
      try {
        const response = await webHookDelete(id);
        if (response) {
          return { message: "WebHook deleted successfully" };
        } else {
          return { message: "WebHook not found" };
        }
      } catch (err) {
        return { error: getErrorMessage(err) };
      }
    },
    async trigger(ctx) {
      const { ipAddress } = ctx.params;
      // const urls = (await webhookGetAll()).map((info) => info.url);
      const urls = ["a"];
      const batches = chunkArray(urls, BATCH_SIZE);
      batches.forEach(async (batch) => {
        const promises = batch.map((url) =>
          axios.post(url, {
            ipAddress,
            timestamp: new Date(),
            iters: 1,
          })
        );
        Promise.all(promises)
          .then((res) => {
            // console.log(res);
            // Do nothing with the POST response
          })
          .catch((err) => {
            // Ignore SSL Errors
          });
      });
      return { message: "HTTP Post Request Sent Successfully" };
    },
  },
};
