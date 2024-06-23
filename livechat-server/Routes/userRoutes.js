const express = require('express');

const Router = express.Router();

const userController = require('../Controllers/userController');
const { protect } = require("../middleware/authMiddleware");

Router.post('/login', userController.loginController);
Router.post('/register', userController.registerController);
Router.get('/fetchUsers', protect, userController.fetchAllUsersController);

module.exports = Router;