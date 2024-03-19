const express=require('express');
const Router=express.Router();
const checkinController=require('../controllers/checkinController');
Router.post('/api/add-checkin',checkinController.AddCheckinData);
Router.get('/api/get-user', checkinController.GetCheckinData); 
Router.put('/api/updatecheckout/:id', checkinController.UpdateCheckOutData); 
module.exports = Router;