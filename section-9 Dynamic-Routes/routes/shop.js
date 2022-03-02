const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop.js');

const router = express.Router();


router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct); //Tell the express that there will be a dynamic variable

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout',shopController.getChekout);




module.exports = router;