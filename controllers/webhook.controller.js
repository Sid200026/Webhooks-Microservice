"use strict";

const { broker } = require("../services");
const {
  LIST_ACTION,
  REGISTER_ACTION,
  UPDATE_ACTION,
  DELETE_ACTION,
} = require("../constants/action.constant");

const listController = async (_req, res) => {
  const response = await broker.call(LIST_ACTION);
  res.send(response);
};

const registerController = async (req, res) => {
  const { targetUrl } = req.body;
  const response = await broker.call(REGISTER_ACTION, { targetUrl });
  res.send(response);
};

const updateController = async (req, res) => {
  const { id, newTargetUrl } = req.body;
  const response = await broker.call(UPDATE_ACTION, { id, newTargetUrl });
  res.send(response);
};

const deleteController = async (req, res) => {
  const { id } = req.body;
  const response = await broker.call(DELETE_ACTION, { id });
  res.send(response);
};

module.exports = {
  listController,
  registerController,
  updateController,
  deleteController,
};
