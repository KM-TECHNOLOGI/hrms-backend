const empService = require('../modules/employee/employee.service');

module.exports = {
  Query: {
    employees: async () => {
      return await empService.getAllEmployees();
    }
  },

  Mutation: {
    createEmployee: async (_, args) => {
      return await empService.createEmployee(args);
    }
  }
};