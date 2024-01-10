"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TodoModel = new mongoose_1.Schema({
    taskName: {
        type: String,
    },
    description: {
        type: String,
    },
    dueDate: {
        type: new Date(),
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("todos", TodoModel);
