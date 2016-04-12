"use strict";
var DocumentDBClient = require("documentdb").DocumentClient;
var config_1 = require('../config');
var dbHelperQuery_1 = require('./dbHelperQuery');
var es6_promise_1 = require('es6-promise');
var users = (function () {
    function users() {
        this.configObj = new config_1.default();
        this.docDbClient = new DocumentDBClient(this.configObj.host, {
            masterKey: this.configObj.authKey
        });
        this.dbHelperQueryObj = new dbHelperQuery_1.default(this.docDbClient, this.configObj.databaseId, this.configObj.collectionId);
    }
    users.prototype.getUser = function (uid) {
        var self = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            self.dbHelperQueryObj.executeQuery(function (err, items) {
                if (err) {
                    reject(err);
                }
                else {
                    var query = {
                        query: 'SELECT * FROM root r where r.uid=@uid',
                        parameters: [
                            {
                                name: '@uid',
                                value: uid
                            }
                        ]
                    };
                    self.dbHelperQueryObj.find(query, function (err, items) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(items);
                        }
                    });
                }
            });
        });
    };
    return users;
}());
//# sourceMappingURL=users.js.map