const products = [];

exports.getAddProduct = (req,res,next) => {
    res.render('add-product', {pageTitle: 'Add product',
    path:'/add-product',
    formsCSS: true,
    productCSS:true,
    activeAddProduct:true});
};


exports.postAddProduct = (req,res,next) => {
    console.log(req.body); //returns the value submitted ej. title=carlos
    products.push({title: req.body.title});
    res.redirect('/');
}


exports.getProducts = (req,res,next) => {
    console.log(products);
    res.render('shop', {
        prods: products,
        pageTitle:'My Shop',
        path:'/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};