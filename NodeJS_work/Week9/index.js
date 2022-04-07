const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res)=>{
   res.render("index_5", {title: "*Welcome to Hogwarts!*"});
});

app.get("/houses", (req, res)=>{
   res.render("houses", {houses: "*Hogwarts Houses quiz!*"});
});

app.get("/contact", (req, res)=>{
   res.render("contact", {contact_us: "Contact Us"});
});

app.get("/users/:username", (req, res)=>{
   res.send(`<h1>Welcome ${req.params.username}</h1>`);
});

app.listen(5000, ()=>{ console.log("Server has started ")});