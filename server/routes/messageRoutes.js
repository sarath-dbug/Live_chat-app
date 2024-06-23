const express = require('express');

const Router = express.Router();

const messageController = require('../Controllers/messageController');
const { protect } = require("../middleware/authMiddleware");

Router.post('/', protect, messageController.sendMessage);
Router.get('/:chatId', protect, messageController.allMessages);

module.exports = Router;