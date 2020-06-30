var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let User = new Schema({
    firstname: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        default: null
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    phoneno: {
        type: Number,
        trim: true,
        
    },
    password: {
        type: String,
        trim: true,
        default: null
    },
    status: {
        type: Boolean,
        default: false
    },
    createdat: {
        type: Date,
        default: Date.now()
    },
    wing: {
        type: String,
        trim :true,
        required: false
    },
    
    flatno: {
        type: Number,
        trim : true,
        select: true
    },
    
});


module.exports = mongoose.model('User', User);
