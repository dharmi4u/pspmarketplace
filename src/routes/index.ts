import {Router} from 'express';
import * as fs from 'fs';
import * as frd from 'formidable';
import * as filestore from 'fs-extra';
import uploadModule from './app_modules/users';

const index = Router();

/* GET users listing. */
index.get('/', function(req, res, next) {
  res.render("index");
});


index.post('/uploading', function(req, res, next) {
 if (req.method.toLowerCase() == 'post') {       
        var fmr = new frd.IncomingForm();
        fmr.parse(req, function (err, fields, files) {
            res.writeHead(200, { 'content-type': 'text/plain' });
 
        });
 
        fmr.on('end', function (fields, files) {
            
            var tempPath = this.openedFiles[0].path;
 
            
            var fileName = this.openedFiles[0].name;
 
                   
            var newFileName = "//D-113077851/GopikrishnaShare/PSPMarketPlace/"+ fileName;
             
            filestore.copy(tempPath, newFileName, function (err) {
                if (err) {
                    console.error(err);
                } else {     
                    var obj = new uploadModule();
                    res.send(obj.test());                                                                                                          
                }
            });
        });
 
        return false;
    }
});

export default index;