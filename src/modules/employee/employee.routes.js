const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth.middleware');
const ctrl = require('./employee.controller');

router.post('/', auth, ctrl.createEmployee);
router.get('/', auth, ctrl.getEmployees);
router.put('/:id', auth, ctrl.updateEmployee);
router.delete('/:id', auth, ctrl.deleteEmployee);

module.exports = router;