const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/uca2',{                   //this will connect to the mongodb
   useNewUrlParser:true,
   useUnifiedTopology:true
});  

var db=mongoose.connection;
db.on('error',function(){
    console.log("error connecting to db")
})

db.once('open',function(){
   console.log("Connected to db")
})
