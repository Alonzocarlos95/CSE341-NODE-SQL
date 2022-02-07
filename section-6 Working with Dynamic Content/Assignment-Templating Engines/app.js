const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');
app.set('views','views');

const users = [];


// const userData = require('./routes/random.js');
// const userRoutes = require('./routes/users.js');

app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res,next) => {
    res.render('add-users', {pageTitle:'Add User'});
})

app.get('/users',(req,res,next) => {
    res.render('user-list',{pageTitle:'Users',users:users})
})

app.post('/add-users',(req,res,next) => {
    console.log(req.body.username);
    users.push({name: req.body.username})
    res.redirect('/users');
})

// app.use(userData.routes);
// app.use(userRoutes);



app.use((req,res,next) => {
    res.status(404).render('404',{pageTitle:'Page not found'});
});

app.listen(5000);