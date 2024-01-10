"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../controller/todoController");
const router = (0, express_1.Router)();
router.route("/create-task").post(todoController_1.createTask);
router.route("/view-task").get(todoController_1.viewTask);
exports.default = router;
