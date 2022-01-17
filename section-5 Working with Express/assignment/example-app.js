const express = require('express');

const app = express();

// app.use((req,res,next) => {
//      console.log('Hello Middleware!');
//      next();
// })


// app.use((req,res,next) => {
//     console.log('What are you doing Middleware?');
//     next();
// })

app.use('/users',(req,res,next) => {
    res.send('<h1>This is a dummy text.</h1>')
})

app.use('/',(req,res) => {
    res.send('<h1>I love Express JS because is easy to use.</h1>')
})

// app.use((req,res,next) => {
//     res.send('<h1>I love Express JS because is easy to use.</h1>')
// })

app.listen(5000);