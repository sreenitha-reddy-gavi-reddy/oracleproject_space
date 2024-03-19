const express = require('express');
const Router = express.Router();

const UserroomController = require('../controllers/roomControllers');

Router.post('/api/user-login',UserroomController.LoginUserData);
Router.post('/api/adduser-room',UserroomController.AddUserroomData);
Router.get('/api/getuser-roomdata',UserroomController.GetuserroomData);
Router.get('/api/getsingle-user/:id',UserroomController.roomDataById);
Router.put("/api/updateuser/:id",UserroomController.UpdateSingleroom);
Router.delete("/api/deleteuser/:id",UserroomController.DeleteroomData);
// Router.post("/api/login-user",UserroomController.LoginUserData);
module.exports = Router;