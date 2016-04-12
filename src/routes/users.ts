import {Router} from 'express';
import usersData from './app_modules/users';

const users = Router();

/* GET users listing. */
users.get('/getuser/:uid', function(req, res, next) {
  var usersData = new usersData();
  usersData.getUser(req.params.uid)
  .then(function(result){
      res.send(result);
  })
});

export default users;
