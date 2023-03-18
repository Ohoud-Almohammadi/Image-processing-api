"use strict";
// Create serve file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
// Create global App object
var app = (0, express_1.default)();
// Set port to 3000
var port = 3000;
// Create maine endpoint
app.get('/', function (req, res) {
    res.send(' Welcome !');
});
app.use('/api', index_1.default);
// Set application to listen on port 3000 and log message to console
app.listen(port, function () {
    console.log("Server started at  localhost:".concat(port));
});
exports.default = app;
