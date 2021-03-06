const Product = require('../models/product');
const Cart = require('../models/cart');



exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle:'My Shop',
            path:'/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
   
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
       res.render('shop/product-detail', {
           product: product,
           pageTitle: product.title,
           path: '/products'
       })
    })
}


exports.getIndex = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle:'My Shop',
            path:'/products'
        });
    });
}

exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for(product of products) {
                const cartProductData = cart.products.find(prod => prod.id === product.id)
                if(cartProductData){
                    cartProducts.push({productData: product, qty: cartProductData.qty });
                }
            }
            res.render('shop/cart',{
                path:'/cart',
                pageTitle:'Your Cart',
                products: cartProducts
            });
        });

        
    })

    
}

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;  //Because it is a post request we use req.body to access of the post reques. Then be use the value of the attribute name in the input of the order detail view
    console.log(prodId);
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price); 
    })
    res.redirect('/cart');
}

exports.postCartDeleteProduct = (req,res,next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.deleteProduct(prodId, product.price);
        res.redirect('/cart');
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders',{
        path:'/orders',
        pageTitle:'Your Orders'
    });
    
}

exports.getChekout = (req, res, next) => {
    res.render('shop/checkout', {
        path:'/checkout',
        pageTitle:'Checkout'
    });
}