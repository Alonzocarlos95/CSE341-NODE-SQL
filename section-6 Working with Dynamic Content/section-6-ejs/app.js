// const http = require('http');
const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');


const app = express();


app.set('view engine','ejs');
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
