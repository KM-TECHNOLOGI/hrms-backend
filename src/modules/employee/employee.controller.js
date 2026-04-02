const Employee = require('./employee.model');

exports.createEmployee = async (req, res) => {
  const emp = await Employee.create(req.body);
  res.json(emp);
};

exports.getEmployees = async (req, res) => {
  const emp = await Employee.find();
  res.json(emp);
};

exports.updateEmployee = async (req, res) => {
  const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(emp);
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};