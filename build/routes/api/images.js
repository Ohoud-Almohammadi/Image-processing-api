"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var checkExists_1 = require("../../middlewares/checkExists");
var imageReszie_1 = require("../../utilities/imageReszie");
var validations_1 = require("../../middlewares/validations");
// Create image object
var image = express_1.default.Router();
// Set router and call middlewares
image.get('/', validations_1.validate, checkExists_1.checkExists, imageReszie_1.imageReszie);
exports.default = image;
