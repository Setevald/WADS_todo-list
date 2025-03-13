import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Todo } from './Todo.jsx';
import { TodoForm } from './TodoForm.jsx';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm.jsx';

uuidv4();

export const TodoWrapper = () => {
    const [toDos, setToDos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const navigate = useNavigate(); 

    const addToDo = (toDo) => {
        setToDos([
            ...toDos,
            {
                id: uuidv4(),
                task: toDo,
                completed: false,
                isEditing: false,
            },
        ]);
    };

    const toggleComplete = (id) => {
        setToDos(toDos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteToDo = (id) => {
        setToDos(toDos.filter((todo) => todo.id !== id));
    };

    const editToDo = (id) => {
        setToDos(toDos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        ));
    };

    const editTask = (task, id) => {
        setToDos(toDos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        ));
    };

    const toggleCompletedFilter = () => {
        setShowCompleted(!showCompleted);
    };

    const filteredTasks = showCompleted
        ? toDos.filter((todo) => todo.completed)
        : toDos;

    const handleToggle = (todoId) => {
        setToDos((prevToDos) =>
            prevToDos.map((todo) =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const showProfile = () => {
        navigate('/profile'); // This should now work
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