import React from 'react'
import './TodoList.css';

const TodoList = () => {
    const todos = [
        {
            id: 1,
            name: 'ReactJS',
            status: true,
        },
        {
            id: 3,
            name: 'HTML',
            status: false,
        },
        {
            id: 3,
            name: 'CSS',
            status: true,
        },
    ]

    return (
        <div className='todo-list'>
            <h1>TodoList</h1>
            <ul>
                {
                    todos.map(item => (
                        <li>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;
