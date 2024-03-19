const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let roomSchema = new Schema({
    floornumber:{
        type : String,
        required:true
    },
    roomnumber:{
        type : String,
        required:true
    },
    roomtype:{
        type: String,
        required:true
    },
    remarks:{
        type:String,
    }
});
module.exports = mongoose.model("userroom",roomSchema);
