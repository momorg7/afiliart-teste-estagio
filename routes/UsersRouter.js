const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

router.post('/create', UsersController.create);

module.exports = router;