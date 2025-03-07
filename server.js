const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 8080;

const Person = require('./models/person');
const MenuItem = require('./models/MenuItem');
const { find } = require('lodash');

app.get('/', function (req, res){
    res.send('Welcome in our Restaurant');
})



//import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');



//use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);



app.listen(8080, ()=>{
    console.log('Listening on port 8080 ')
})
