"use strict";
var DocumentDBClient = require("documentdb").DocumentClient;
var config_1 = require('../config');
var dbHelperQuery_1 = require('./dbHelperQuery');
var uploadModule = (function () {
    function uploadModule() {
        this.configObj = new config_1.default();
        this.docDbClient = new DocumentDBClient(this.configObj.host, {
            masterKey: this.configObj.authKey
        });
        this.dbHelperQueryObj = new dbHelperQuery_1.default(this.docDbClient, this.configObj.databaseId, this.configObj.collectionId);
    }
    return uploadModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = uploadModule;
//# sourceMappingURL=uploadModule.js.map