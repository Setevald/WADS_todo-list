import React, { useState } from 'react'

export const EditTodoForm = ({ editToDo, task }) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editToDo(value, task.id);
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-sm mx-auto p-4"
        >
            <div className="flex gap-2">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder='Update task'
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                >
                    Update Task
                </button>
            </div>
        </form>
    )
}