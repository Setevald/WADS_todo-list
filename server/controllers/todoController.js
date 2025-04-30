const Todo = require('./models/Todo');

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Get single todo
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'Todo not found'
      });
    }
    
    return res.status(200).json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Create new todo
exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    
    return res.status(201).json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error(error);
    if (error.name === 'SequelizeValidationError') {
      const messages = error.errors.map(err => err.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    }
    
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Update todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'Todo not found'
      });
    }
    
    await todo.update(req.body);
    
    return res.status(200).json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error(error);
    if (error.name === 'SequelizeValidationError') {
      const messages = error.errors.map(err => err.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    }
    
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'Todo not found'
      });
    }
    
    await todo.destroy();
    
    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};