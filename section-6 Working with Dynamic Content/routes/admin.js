const path = require('path');

const express = require('express');

const rootDir = require('../helper/path');

const router = express.Router();

const products = [];

router.get('/add-product',(req,res,next) => {
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add product', path:'/add-product'});
})

router.post('/add-product',(req,res,next) => {
    console.log(req.body); //returns the value submitted ej. title=carlos
    products.push({title: req.body.title});
    res.redirect('/');
})

// module.exports = router;
exports.routes = router;
exports.products = products;