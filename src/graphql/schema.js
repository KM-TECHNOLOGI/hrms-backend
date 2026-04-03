const { gql } = require('apollo-server-express');

module.exports = gql`
  type Employee {
    _id: ID
    name: String
    department: String
    position: String
    salary: Float
  }

  type Query {
    employees: [Employee]
  }

  type Mutation {
    createEmployee(
      name: String
      department: String
      position: String
      salary: Float
    ): Employee
  }
`;