require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');
const { sequelize, connectDB } = require('./config/database');
const todoRoutes = require('./routes/todoRoutes');

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000', // Your React app URL
  credentials: true
}));

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Welcome Route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Todo API. Visit /api-docs for documentation.'
  });
});

// API Routes
app.use('/api/todos', todoRoutes);

// Error handling middleware
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Resource not found'
  });
});

// Set port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});