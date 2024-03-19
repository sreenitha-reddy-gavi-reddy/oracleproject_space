const express = require('express');
const mongoose = require('mongoose') ;
const UserRouter=require('./src/routes/userRoutes');
const MaintainRouter=require('./src/routes/maintainRoutes');
const RoomRoutes = require('./src/routes/roomRoutes');
const DthRoutes=require('./src/routes/dthRoutes');
const CheckinRoutes=require('./src/routes/checkinRoutes');
const app = express();
const cors=require("cors");
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(cors());
app.use('/',UserRouter);
app.use('/',MaintainRouter);
app.use('/',RoomRoutes);
app.use('/',DthRoutes);
app.use('/',CheckinRoutes);
mongoose.connect('mongodb+srv://21mh1a4210:yTYCiAcX8iUVAZiS@cluster0.99kkpkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>app.listen(5000))
.then(()=>
console.log("Connected to Database & Listening to localhost 5000")
)
.catch((err)=>console.log(err));
// app.use("/api", (req, res, next)=>{
// res.send("hi hello")
// })
// app.listen(5000)