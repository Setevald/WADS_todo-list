import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Todo } from './Todo.jsx';
import { TodoForm } from './TodoForm.jsx';
import { EditTodoForm } from './EditToDoForm.jsx';
import axios from 'axios';

// API base URL - adjust this to match your backend
const API_URL = 'http://localhost:5000/api/todos';

export const TodoWrapper = () => {
    const [toDos, setToDos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const navigate = useNavigate(); 

    // Fetch todos from backend when component mounts
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(API_URL);
                // Adapt the backend data structure to match your frontend expectations
                const adaptedTodos = response.data.data.map(todo => ({
                    id: todo.id,
                    task: todo.title,
                    completed: todo.status === 'completed',
                    isEditing: false
                }));
                setToDos(adaptedTodos);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        
        fetchTodos();
    }, []);

    const addToDo = async (task) => {
        try {
            const response = await axios.post(API_URL, {
                title: task,
                status: 'pending'
            });
            
            // Add the new todo to the state with appropriate structure
            const newTodo = {
                id: response.data.data.id,
                task: response.data.data.title,
                completed: false,
                isEditing: false
            };
            
            setToDos([...toDos, newTodo]);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const toggleComplete = async (id) => {
        try {
            const todo = toDos.find(t => t.id === id);
            const newStatus = todo.completed ? 'pending' : 'completed';
            
            await axios.put(`${API_URL}/${id}`, {
                status: newStatus
            });
            
            setToDos(toDos.map(t => 
                t.id === id ? { ...t, completed: !t.completed } : t
            ));
        } catch (error) {
            console.error('Error updating todo status:', error);
        }
    };

    const deleteToDo = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setToDos(toDos.filter(t => t.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const editToDo = (id) => {
        setToDos(toDos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        ));
    };

    const editTask = async (task, id) => {
        try {
            await axios.put(`${API_URL}/${id}`, { 
                title: task 
            });
            
            setToDos(toDos.map(t => 
                t.id === id ? { ...t, task, isEditing: false } : t
            ));
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const toggleCompletedFilter = () => {
        setShowCompleted(!showCompleted);
    };

    const filteredTasks = showCompleted
        ? toDos.filter((todo) => todo.completed)
        : toDos;

    const handleToggle = (todoId) => {
        toggleComplete(todoId);
    };

    const showProfile = () => {
        navigate('/profile');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
                    <div className="space-x-2">
                        <button
                            onClick={toggleCompletedFilter}
                            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
                        >
                            {showCompleted ? 'Show All' : 'Show Completed'}
                        </button>
                        <button
                            onClick={showProfile}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                        >
                            Profile
                        </button>
                    </div>
                </div>

                <TodoForm addToDo={addToDo} />
                
                <div className="mt-4 space-y-2">
                    {filteredTasks.length === 0 ? (
                        <p className="text-center text-gray-500">No tasks to show</p>
                    ) : (
                        filteredTasks.map((todo) => (
                            todo.isEditing ? (
                                <EditTodoForm
                                    key={todo.id}
                                    editToDo={editTask}
                                    task={todo}
                                />
                            ) : (
                                <Todo
                                    key={todo.id}
                                    task={todo}
                                    toggleComplete={toggleComplete}
                                    deleteToDo={deleteToDo}
                                    editToDo={editToDo}
                                    onToggle={handleToggle}
                                />
                            )
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};