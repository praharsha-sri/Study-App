import React, { useState } from 'react'
import img1 from 'C:/Users/LENOVO/Desktop/Study/todo/src/user.jpg'

const bg = (id) => {
    if (parseInt(id) % 3 == 0){
        return {background: "#FD8A8A"}
    }
    else if (parseInt(id) % 3 == 1){
        return {background: "#C0DBEA"}
    }
    else {
        return {background: "#A2CDB0"}
    }

}

export default function Sorting({todos, setTodos}) {
    const [completedTodos, setCompletedTodos] = useState([])

    const handleDelete = id => {
        const updatedItems = [...todos]
        updatedItems.splice(id, 1)
        setTodos(updatedItems)
    }

    const handleComplete = (id, title, board) => {
        const todaydate = new Date()
        const completedOn = todaydate.getDate() + "/" + (todaydate.getMonth() + 1) + "/" + todaydate.getFullYear()
        const filteredItem = {
            ...todos[id],
            title: title,
            board: board,
            completedOn: completedOn
        }
        const updatedCompleted = [...completedTodos]
        updatedCompleted.push(filteredItem)
        setCompletedTodos(updatedCompleted)
        handleDelete(id)
    }

    return (
            todos.map((todo, index) => (
                <div className='container' style = {bg(index)} key={index}>
                        <div className='flex1'>
                            <img src = {img1} />
                            <div className='innerflex'>
                                <input type = "checkbox" className='checked' onClick={() => handleComplete(index, todo.title, todo.board)}></input>
                                <box-icon name='trash' size = '30px' onClick = {() => handleDelete(index)}></box-icon>
                            </div>
                        </div>
                        <div className='flex1'>
                            <h4> {todo.board} </h4>
                            <h4> {todo.duration} </h4>
                        </div>
                        <h1> {todo.taskTitle} </h1>
                    </div>
            ))
    )
}