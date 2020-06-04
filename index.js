const express = require("express");
const request = require("request");
const exphbs = require("express-handlebars");
const app = express();
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");
app.get("/",(req,res)=>{
    request("https://jsonplaceholder.typicode.com/users",(err,response,body)=>{
        if (!err){
            const users = JSON.parse(body);
            res.render("home",{ 
                layout:"main",
                users:users
            });
        }
    })
});
app.get("/zipcodes",(req,res)=>{
    request("https://jsonplaceholder.typicode.com/users",(err,response,body)=>{
        if (!err){
            const users = JSON.parse(body);
            res.render("zipcodes",{ 
                layout:"main",
                users:users
            });
        }
    })
});
app.listen(3000);