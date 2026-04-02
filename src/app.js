const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./modules/auth/auth.routes');
const employeeRoutes = require('./modules/employee/employee.routes');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

app.get('/', (req, res) => {
  res.send('HRMS API Running...');
});

module.exports = app;