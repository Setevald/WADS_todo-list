import React, { useState } from 'react'

export const TodoForm = ({addToDo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addToDo(value);
        setValue("");   
    }
    
    return (
        <form 
            className="w-full max-w-lg mx-auto p-4"
            onSubmit={handleSubmit}
        >
            <div className="flex gap-2">
                <input 
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={value}
                    placeholder="Enter task"
                    onChange={(e) => setValue(e.target.value)}
                />
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
                >
                    Add Task
                </button>
            </div>
        </form>
    )
}