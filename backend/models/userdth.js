const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let dthSchema = new Schema({
    floornumber:{
        type : String,
        required:true
    },
    roomnumber:{
        type : String,
        required:true
    },
    DTHCompany:{
        type: String,
        required:true
    },
   CardNumber:{
        type:String,
        required:true
    },
    Rechargeon:{
        type:Date,
        required:true,
        
    },
   
    Rechargeexpired:{
        type:Date,
        required:true, 
    },
    Remainder:{
        type:Date,
        required:true,
    },
    Remarks:{
        type:String,
        required:true,
    }


});
module.exports = mongoose.model("userdth",dthSchema);
