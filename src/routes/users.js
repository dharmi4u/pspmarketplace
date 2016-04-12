"use strict";
var express_1 = require('express');
var users = express_1.Router();
/* GET users listing. */
users.get('/getuser/:uid', function (req, res, next) {
    var usersData = new usersData();
    usersData.getUser(req.params.uid)
        .then(function (result) {
        res.send(result);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = users;
//# sourceMappingURL=users.js.map