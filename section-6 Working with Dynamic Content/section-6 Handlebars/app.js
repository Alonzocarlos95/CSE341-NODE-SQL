// const http = require('http');
const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const expressHbs = require('express-handlebars');

const app = express();



app.engine('handlebars',expressHbs({layoutDir:'views/layouts/', defaultLayout:'main-layout',extname:'handlebars'}));
app.set('view engine','handlebars');
app.set('views','views');

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminData.routes);
app.use(shopRoutes);


app.use((req,res,next) => {
    // res.status(404).sendFile(path.join(__dirname,'views', '404.html'));
    res.status(404).render('404',{pageTitle:'Page not found'});

})


    
// server.listen(3000);
app.listen(3000);
