"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const TodoRouter_1 = __importDefault(require("./Router/TodoRouter"));
const mainApp = (app) => {
    try {
        app.use("/", TodoRouter_1.default);
        app.get("/", (req, res) => {
            try {
                return res.status(200).json({
                    message: "welcome to todo api"
                });
            }
            catch (_a) {
                return res.status(404).json({
                    message: "error viewing api"
                });
            }
        });
    }
    catch (_a) {
    }
};
exports.mainApp = mainApp;
