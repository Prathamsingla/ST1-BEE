//npm install ejs nodemon express request body-parser 
const request=require("request");
const bodyParser=require("body-parser");
const express=require("express");
const db=require("./db");
const data = require("./db");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");



app.get("/",(req,res)=>{
   res.render("index",{data:db});
});
app.post("/add",(req,res)=>{
    var maths=parseInt(req.body.math);
    var english=parseInt(req.body.english);
    var science=parseInt(req.body.science);
    var sanskrit=parseInt(req.body.sanskrit);
    var evs=parseInt(req.body.evs);
    var percentage=((maths+english+science+evs+sanskrit)/500)*100;
    var totalmarks=maths+english+science+evs+sanskrit;
    const new_data={
        id:4,
        name:req.body.name,
        address:req.body.address,
        maths:maths,
        english:english,
        science:science,
        sanskrit:sanskrit,
        evs:evs,
        totalmarks:totalmarks,
        average:(totalmarks)/5,
        grade:(percentage>90)?'A':(percentage>33)?'B':'F',
    }
    data.push(new_data);
    res.redirect("/");
})

app.get("/add",(req,res)=>{
    res.render("form");
})

app.listen(3020)