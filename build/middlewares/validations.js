"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
// Check enterd parameters values befor resize
var validate = function (req, res, next) {
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    //#1 Check if image name enterd
    if (!filename)
        return res.status(404).send('Please enter image name !');
    //#2 Check if image width enterd and it's a number
    if (!width || !Number(width))
        return res.status(404).send('Please enter image width and should be a number !');
    //#3 Check if image width a positive number
    if (+width <= 0)
        return res.status(404).send('Please enter positive image width !');
    //#4 Check if image height enterd and it's a number
    if (!height || !Number(height))
        return res.status(404).send('Please enter image height and should be a number !');
    //#5 Check if image height a positive number
    if (+height <= 0)
        return res.status(404).send('Please enter positive image height !');
    next();
};
exports.validate = validate;
