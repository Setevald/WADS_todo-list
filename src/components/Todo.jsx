import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteToDo, editToDo}) => {
    return (
        <div 
            className="flex items-center justify-between p-4 bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            key={task.id}
        >
            <p
                className={`flex-1 text-gray-800 ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
                {task.task}
            </p>

            <div className="flex items-center gap-3">
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(task.id)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                </div>

                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => editToDo(task.id)}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-200"
                />

                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteToDo(task.id)}
                    className="text-red-500 hover:text-red-700 cursor-pointer transition-colors duration-200"
                />
            </div>
        </div>
    )
}