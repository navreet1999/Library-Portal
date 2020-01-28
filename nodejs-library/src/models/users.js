const mongoose=require('mongoose');


//schema for collections
const usersSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isEnabled: Boolean
})

const UsersModel = mongoose.model("Users",usersSchema);   //actual collection which directly pointing to the same collection in the database

UsersModel.findUsers = function (req, callback){
    let id=req.query.id;
    let query={};
    if(id){
        query = {_id: id}
    }
   UsersModel.find(query, callback);
}

UsersModel.addUsers=function(req, callback){
    let user=req.body;
    UsersModel.create(user, callback);
}

UsersModel.updateUsers=function(req, callback){
    let query={_id: req.body._id};
    let user=req.body;
    UsersModel.updateOne(query,user, callback);
}
module.exports= UsersModel;