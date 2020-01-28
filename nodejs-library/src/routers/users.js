var express=require('express');
const router= express.Router();
const UsersModel = require('./../models/users');

router.get('', (req,res) => {

    UsersModel.findUsers(req,(error,response) =>{
        if(error) console.log(error);
        if(response) console.log("Success response is: ", response);
        res.send(response);
      });
});

router.post('/add', (req,res) => {

    UsersModel.addUsers(req,(error,response) =>{
        if(error) console.log(error);
        if(response) console.log("Success response is: ", response);
        res.send(response);
      });
});

router.put('/edit', (req,res) => {

    UsersModel.updateUsers(req,(error,response) =>{
        if(error) console.log(error);
        if(response) console.log("Success response is: ", response);
        res.send(response);
      });
});

module.exports = router;