const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WriterSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Century: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: true
    },
    Highlight:{
        type : String,
        required: true
    }
});

module.exports = mongoose.model('structure',WriterSchema);