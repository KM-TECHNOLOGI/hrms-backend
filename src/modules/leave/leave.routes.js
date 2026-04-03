const express = require('express');
const router = express.Router();

const { applyLeave } = require('./leave.controller');
const auth = require('../../middlewares/auth.middleware');

router.post('/', auth, applyLeave);

module.exports = router;