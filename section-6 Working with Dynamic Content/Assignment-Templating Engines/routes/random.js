const path = require('path');

const express = require('express');

const router = express.Router();

const userList = [];

router.get('/',(req,res,next) => {
    res.render('add-users',{
        pageTitle:'Registration',
        path:'/'
    });
});

router.post('/',(req,res,next) => {
    userList.push({name: req.body.username});
    res.redirect('/users');
})


exports.routes = router;