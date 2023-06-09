"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("../routes/api/images"));
// Create route object
var routes = express_1.default.Router();
// Create endpoint
routes.use('/images', images_1.default);
// Send error message when enter  any other route
routes.get('*', function (req, res) {
    res.status(404);
    res.send('Not found !');
});
exports.default = routes;
