const path = require('path');

const express = require('express');

const router = express.Router();

const userData = require('./random.js');

router.get('/users',(req,res,next) => {
    const userList = userData.userList;
    console.log(userList + ' this is the response');
    res.render('user-list',{
        us: userList,
        pageTitle:'List of Users',
        path:'/users'
    })
})

module.exports = router;