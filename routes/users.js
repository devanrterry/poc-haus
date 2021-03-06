const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

// Routes go here...
router.post('/sign', userCtrl.sign);
router.get('/:id', userCtrl.getOne);

module.exports = router;