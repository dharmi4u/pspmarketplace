
var DocumentDBClient = require("documentdb").DocumentClient;
import config from '../config';
import dbHelperBase from './dbHelperBase';
import dbHelperQuery from './dbHelperQuery';
import {Promise} from 'es6-promise';

class uploadModule {
    
    configObj;
    docDbClient;
    dbHelperQueryObj;
    
    constructor() {
         this.configObj = new config();
        this.docDbClient = new DocumentDBClient(this.configObj.host, {
            masterKey: this.configObj.authKey
        });
        this.dbHelperQueryObj = new dbHelperQuery(this.docDbClient, this.configObj.databaseId, this.configObj.collectionId);
    }
    
    
    
    
    /*uploadData(req, resp){
        if (req.method.toLowerCase() == 'post') {
 
        //5.
 
        var fmr = new frd.IncomingForm();
        fmr.parse(req, function (err, fields, files) {
            resp.writeHead(200, { 'content-type': 'text/plain' });
 
        });
 
        fmr.on('end', function (fields, files) {
            //6.
            var tempPath = this.openedFiles[0].path;
 
            //7.
            var fileName = this.openedFiles[0].name;
 
            //8.       
            var newFileName = "//D-113077851/GopikrishnaShare/PSPMarketPlace/"+ fileName; //../FileUpload_" + fileName;
 
            //9.
            filestore.copy(tempPath, newFileName, function (err) {
                if (err) {
                    console.error(err);
                } else {                    
                    resp.end('File Uploaded');
                }
            });
        });
 
        return;
    }
  }*/
}

export default uploadModule;
