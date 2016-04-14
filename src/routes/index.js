"use strict";
var express_1 = require('express');
var frd = require('formidable');
var filestore = require('fs-extra');
var uploadModule_1 = require('../app_modules/uploadModule');
var index = express_1.Router();
/* GET users listing. */
index.get('/', function (req, res, next) {
    res.render("index");
});
index.post('/', function (req, res, next) {
    if (req.method.toLowerCase() == 'post') {
        var fmr = new frd.IncomingForm();
        fmr.parse(req, function (err, fields, files) {
            res.writeHead(200, { 'content-type': 'text/plain' });
        });
        fmr.on('end', function (fields, files) {
            var tempPath = this.openedFiles[0].path;
            var fileName = this.openedFiles[0].name;
            var newFileName = "//D-113077851/GopikrishnaShare/PSPMarketPlace/" + fileName;
            filestore.copy(tempPath, newFileName, function (err) {
                if (err) {
                    console.error(err);
                }
                else {
                    var obj = new uploadModule_1.default();
                    obj.insertDocument(function (result) {
                        res.end(JSON.stringify(result));
                    });
                }
            });
        });
        return false;
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = index;
//# sourceMappingURL=index.js.map