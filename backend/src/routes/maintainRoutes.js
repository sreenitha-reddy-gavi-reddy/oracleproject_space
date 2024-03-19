const express=require('express');
const Router=express.Router();
const maintainController=require('../controllers/maintainContoller');
Router.post('/api/add-repair',maintainController.AddRepairData);
Router.get('/api/get-repair',maintainController.GetMaintainData);
Router.delete("/api/delete-repair/:id", maintainController.DeleteMaintainData);
Router.get("/api/get-single-repair/:id", maintainController.UserMaintainDataById);
Router.put("/api/update-repair/:id", maintainController.UpdateSingleMaintain);
module.exports=Router;