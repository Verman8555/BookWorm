const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const WriterSchema = require('./models/structure');

const app = express();

//dotenv.config({path:'config.env'});
mongoose.connect('mongodb+srv://vermanvishal8555:nT9eVnwYGfY3pw0N@cluster0.fatjnzh.mongodb.net/', {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
});

/* mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true}, () => 
    console.log('Database Connected')
); */
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.get('/',(req,res) => {
    res.send("hi");
})

app.listen(1234,() => {
    console.log("Hello");
})