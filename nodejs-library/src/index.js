const express = require("express");
const bodyParser = require("body-parser");
require('./dbConnection.js');
var app=express();
var users=require('./routers/users');


var id=1;
var books = [
        {
        "id": id,
        "name": "B1",
        "author": "A1",
        "version": "1.2"
        }
]

//  app.<METHODNAME>('path', handler() => {})

app.use(bodyParser.json());

//sample middleware
app.use("*", (req, res, next) => {
    console.log("Middleware is called");
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Methods',"*");
    res.setHeader('Access-Control-Allow-Headers',"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
})

app.use('/users', users);             

app.get("/",function(req, res) {
    console.log(req);
    res.send("Library Portal");
})

app.get("/bookList", (req, res)=> {
    res.send(books);
})

app.post("/addBook", (req, res) =>{
    id =id+1;
    let book= req.body;
    book.id=id;
    console.log("Add Book is called: ", book);
    books.push(book);
    res.send(book);
})
app.post("/editBook", (req, res) =>{
   // id =id+1;
    let book= req.body;
    book.id=id;
    console.log("edit Book is called: ", book);
    books.push(book);
    res.send(book);
})
// http://localhost:3000/bookList/1
app.delete("/deleteBook/:id", (req, res) => {
    let bookId= req.params.id;
    let newBookList= [];
    books.forEach(book =>{
        if(bookId != book.id)
        newBookList.push(book);
    })
    books = newBookList;
    res.send("Book Deleted");
})

app.listen(8000, () => {
    console.log("Server is listening at port 8000");
})
