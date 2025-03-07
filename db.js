const mongoose = require('mongoose');
require('dotenv').config();

// define the MongoDb connection URL
//const mongoURL = process.env.MONGODB_URL;
const mongoURL = process.env.MONGODB_URL;

// set up mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get the default connection
// mongoose maintains a dafault connection object representing the mongoDB connection.
const db = mongoose.connection;

//define event listenser for db connnection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error(' MongoDB connection error', err);
});

db.on('disconnected', () => {
    console.log(' MongoDB disconnected');
});


//export the db connection
module.exports = db;