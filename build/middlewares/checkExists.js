"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExists = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var checkExists = function (req, res, next) {
    // Create a function to check for the existence of the requested image
    var exists = function (folder, filename) {
        //#1 Take enterd information
        var requistedImage = path_1.default.join(folder, filename);
        //#2 Check existence
        var isFound = fs_1.default.existsSync(requistedImage);
        return isFound ? requistedImage : null;
    };
    // Define main folders
    var fullFolder = path_1.default.join(__dirname, '../../images/full');
    var thumbFolder = path_1.default.join(__dirname, '../../images/thumbnails');
    // Take  parameters
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    // Check if requisted image exists in fullfolder
    var inputImg = exists(fullFolder, "".concat(filename, ".jpg"));
    // Send message if requisted image is not found
    if (!inputImg)
        return res.status(404).send('Requisted Image not found !');
    if (!width && !height)
        return res.sendFile(inputImg);
    // Check if requisted image exists in thumbfolder
    var ImageCached = exists(thumbFolder, "".concat(filename, "(").concat(width, "x").concat(height, ").jpg"));
    if (ImageCached)
        return res.sendFile(ImageCached);
    res.locals.newImage = inputImg;
    next();
};
exports.checkExists = checkExists;
