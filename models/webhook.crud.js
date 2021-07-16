"use strict";

const sequelize = require("./index");
const { Webhook } = sequelize.models;

const webhookCreate = async (url) => {
  const createdWebHook = (await Webhook.create({ url })).get({ plain: true });
  return createdWebHook;
};

const webhookGetAll = async () => {
  const webHookList = await Webhook.findAll({ raw: true });
  return webHookList;
};

const webHookGetByURL = async (url) => {
  const webHookSpecific = await Webhook.findAll({ where: { url }, raw: true });
  return webHookSpecific; // Can return multiple rows
};

const webHookGetByID = async (id) => {
  const webHookSpecific = await Webhook.findOne({
    where: { id },
  });
  return webHookSpecific;
};

const webHookUpdate = async (id, url) => {
  const webhookObj = await webHookGetByID(id);
  if (webhookObj) {
    webhookObj.url = url;
    await webhookObj.save();
    return true;
  }
  return false;
};

const webHookDelete = async (id) => {
  const rowsDeleted = await Webhook.destroy({ where: { id } });
  if (rowsDeleted === 0) return false; // No 
  return true;
};

module.exports = {
  webhookCreate,
  webHookGetByURL,
  webhookGetAll,
  webHookGetByID,
  webHookUpdate,
  webHookDelete,
};
