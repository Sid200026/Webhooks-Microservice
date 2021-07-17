const express = require("express");
const {
  listController,
  registerController,
  updateController,
  deleteController,
  triggerController,
} = require("../../controllers/webhook.controller");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.route("/list").get(listController);
router.route("/register").post(registerController);
router.route("/update").post(updateController);
router.route("/delete").post(deleteController);
router.route("/ip").get(triggerController);

module.exports = { router };
