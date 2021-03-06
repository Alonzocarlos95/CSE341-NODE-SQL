// const http = require('http');
const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error.js');
const db = require('./util/database.js');

const app = express();


app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

// db.execute('SELECT * FROM products')
// .then(result => {
//     console.log(result[0],result[1]);
// })
// .catch(err => {
//     console.log(err);
// });

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.use(adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);


    
// server.listen(3000);
app.listen(3000);
