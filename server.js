const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const methodOverride = require('method-override');
const WriterSchema = require('./models/structure');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));

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

app.get('/', async (req,res) => {
    try{
        const data = await WriterSchema.find();
        res.json(data);
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

app.post('/post', async (req,res) => {
    const data = new WriterSchema({
        Name: req.body.Name,
        Century: req.body.Century,
        Genre: req.body.Genre,
        Hightlight: req.body.Highlight
    });
    try{
        const savedData = await data.save();
        res.status(200).json(savedData);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

app.get('/:id', async (req,res) => {
    try{
        const data = await WriterSchema.findById();
        res.json(data);
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

app.listen(1234,() => {
    console.log("Hello");
})