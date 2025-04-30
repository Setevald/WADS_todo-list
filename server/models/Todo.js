const { DataTypes } = require('sequelize');
const { sequelize } = require('./config/database');

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'in-progress', 'completed'),
    defaultValue: 'pending'
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

module.exports = Todo;