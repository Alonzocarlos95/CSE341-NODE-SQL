const path = require("path");

const express = require("express");


const app = express();

const randomRoute = require('./routes2/random.js');
const usersRoute = require('./routes2/users.js');


app.use(randomRoute);
app.use(usersRoute);

app.use(express.static(path.join(__dirname,'public')));

app.listen(5000);