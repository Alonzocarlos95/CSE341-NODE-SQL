// const http = require('http');
const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');


const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(shopRoutes);


app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views', '404.html'));

})
// app.use((req, res, next) => {
//     console.log('In  the middleware');
//     next(); //Allow the request to continue to the next middleware in line
// })

// app.use('/add-product',(req,res,next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// })

// app.post('/product',(req,res,next) => {
//     console.log(req.body);
//     res.redirect('/');
// })

// app.use('/',(req,res,next) => {
//     console.log('In another middleware');
//     res.send('<h1>Hello from Express!</h1>');
// })

// const server = http.createServer(app);

    
// server.listen(3000);
app.listen(3000);
