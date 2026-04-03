const Employee = require('./employee.model');

exports.getAllEmployees = async () => {
  return await Employee.find();
};

exports.createEmployee = async (data) => {
  return await Employee.create(data);
};