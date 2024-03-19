const express =require('express')
const Router = express.Router();
const dthController = require('../controllers/dthController');
Router.post('/api/add-dth',dthController.AddDthData);
Router.get('/api/get-dth',dthController.GetDthData);
Router.get("/api/get-single-dth/:id", dthController.UserDthById);
Router.put("/api/update-dth/:id", dthController.UpdateDthUser);
Router.delete("/api/delete-dth/:id", dthController.DeleteDthData);
module.exports = Router;
