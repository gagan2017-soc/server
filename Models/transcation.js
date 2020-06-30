var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Transcation = new Schema({
    entrydt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    narration: {
        type: String,
        trim: true,
        required: true
    },
    clearingdt: {
        type: Date,
        required: true,
        default: Date.now()
        
    },
     amount: {
        type: Number,
        required: true
    },
    mode: {
        type: String,
      
    },
    flatno: {
        type: Number,
       
    },
    frommonth: {
        type: String,
     
    },
    fromyear: {
        type: Number,
        
    },
    tomonth: {
        type: String,
        trim :true,
      
    },
    toyear: {
        type: Number,
        trim :true,
    
    },
    receiptgen: {
        type: String,

    },
    receiptnumber: {
        type: String,
        trim : true
    

    },
     
});


module.exports = mongoose.model('Transcation',Transcation);