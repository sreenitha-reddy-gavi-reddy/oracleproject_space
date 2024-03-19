const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let RepairSchema=new Schema({
    floor :{
        type: String,
    },
    roomnumber :{
        type: String,
    },
    roomtype:{
        type: String,
    },
    work:{
        type: String,
    },
    workstart:{
        type: String,
    },
    workend:{
        type: String,
    },
    state:{
        type: String,
    },
    workdelay:{
        type: String,
    }
})
module.exports = mongoose.model("userepair",RepairSchema);