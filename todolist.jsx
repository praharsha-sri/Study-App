import React, { useState } from 'react'
import './tasks.css'
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

export default function Todolist({todos, setTodos, completedScreen, setCompletedScreen, day, setDay}) {
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
        <>
            {completedScreen === 'false' && todos.map((todo, index) => {
                return (day === todo.date1.getDay() && <div className='container' style = {bg(index)} key={index}>
                <div className='flex1'>
                    <img src = {img1} />
                    <div className='innerflex'>
                        <input type = "checkbox" className='checked' onClick={() => handleComplete(index, todo.taskTitleitle, todo.board)}></input>
                        <box-icon name='trash' size = '30px' onClick = {() => handleDelete(index)}></box-icon>
                    </div>
                </div>
                <div className='flex1'>
                    <h4> {todo.board} </h4>
                    <h4> {todo.duration} </h4>
                </div>
                <h1> {todo.taskTitle} </h1>
            </div>)
            })}

            {completedScreen === 'true' && completedTodos.map((todo) => (
                <div className='container' style = {bg(todo.id)}>
                        <img className='compimg' src = {img1} />
                        <h4 comph4> {todo.board} </h4>
                    <div className='flex2'>
                        <h1> {todo.taskTitle} </h1>
                        <p> <medium> Completed On: {todo.completedOn} </medium> </p>
                    </div>
                </div>
            ))}
        </>
    )
}