"use strict";
var express_1 = require('express');
var frd = require('formidable');
var filestore = require('fs-extra');
var users_1 = require('./app_modules/users');
var index = express_1.Router();
/* GET users listing. */
index.get('/', function (req, res, next) {
    res.render("index");
});
index.post('/uploading', function (req, res, next) {
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
                    var obj = new users_1.default();
                    res.send(obj.test());
                }
            });
        });
        return false;
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = index;
//# sourceMappingURL=index.js.map