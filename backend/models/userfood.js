const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let UserSchema=new Schema({
    guest: {
        type: String,
        required:true
    },
    reference: {
        type: String,
        required:true
    },
    dates: {
        type: Date,
        required:true
    },
    veglunch:{
        type: String,
        required:true
    },
    nonveglunch:{
        type: String,
        required:true
    },
    tea:{
        type: String,
        required:true
    },
    vegdinner: {
        type: String,
        required:true
    },
    dinnerquantity: {
        type: String,
        required:true
    },
    visit: {
        type: String,
        required:true
    },
    team: {
        type: String,
        required:true
    },
    breakfast: {
        type: String,
        required:true
    },
    nvmenu: {
        type: String,
        required:true
        // enum: ['Select','Lunch-1 NV Biryani','Lunch-2 NV Biryani','Lunch-3 NV Biryani','Lunch-4 NV Biryani'],
    },
    snacks: {
        type: Number,
        required:true
    },
    coffee: {
        type: Number,
        required:true
    },
    nvdinner: {
        type: String,
        required:true
        // enum: ['Select...','Lunch-1 NV Biryani','Lunch-2 NV Biryani','Lunch-3 NV Biryani','Lunch-4 NV Biryani'],
    },
});
module.exports = mongoose.model("userfood",UserSchema);