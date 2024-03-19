const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let UserSchema=new Schema({
    personname:{
        type: String,
        required:true
    },
    organisation:{
        type: String,
        required:true
    },
    mobile:{
        type: String,
        required:true
    },
    visit:{
        type: String,
        required:true
    },
    fromdate:{
        type: Date,
        required:true
    },
    todate:{
        type: Date,
        required:true
    },
    stay:{
        type: String,
        required:true
    },
    place:{
        type: String,
        required:true

    },
    reference:{
        type: String,
        required: true
    },
    conformation:{
        type: String,
        required:true
    },
    room:{
        type: String,
        required:true,
    },
    remarks:{
        type: String
        
    },
    status:{
        type: Number,
        default: 1
    } 

});
module.exports=mongoose.model("checkin",UserSchema);