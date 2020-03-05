const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

router.post('/', UsersController.create);
router.get('/', UsersController.index);
router.get('/:id', UsersController.show);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.destroy);

module.exports = router;