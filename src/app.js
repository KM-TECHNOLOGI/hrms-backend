const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const authRoutes = require('./modules/auth/auth.routes');
const employeeRoutes = require('./modules/employee/employee.routes');
const leaveRoutes = require('./modules/leave/leave.routes');

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// REST Routes
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/leaves', leaveRoutes);

// Health Check
app.get('/', (req, res) => {
  res.send('HRMS API Running...');
});

// GraphQL Setup
async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: '/graphql'
  });

  console.log(`🚀 GraphQL ready at http://localhost:5000/graphql`);
}

startServer();

module.exports = app;