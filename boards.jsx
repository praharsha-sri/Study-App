import React, { useState } from 'react'
import './boards.css'
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
export default function Boards({brr, setBrr, todos}) {
    const [showboard, setShowBoard] = useState('true')
    const showTasks = (index, title, todos) => {
        setShowBoard('false')
        todos.map((todo, index) => {
            console.log(todo.board === title)
            return (todo.board === title && <div className='containertask' style = {bg(index)} key={index}>
                <h1> hi </h1>
                <img src = {img1} />
                <div className='flex3'>
                    <h4> {todo.board} </h4>
                    <h4> {todo.duration} </h4>
                </div>
                <h1> {todo.taskTitle} </h1>
            </div>)
    })
    }
    return (
        <>
            {showboard === 'true' && brr.map((b, index) => (
                <div className='container1' style = {bg(index)} key={index} onClick={() => showTasks(index, b.boardTitle, todos)}>
                    <img className='compimg1' src = {img1} />
                    <h4 className='a123'>no of active tasks</h4>
                    <h1> {b.boardTitle} </h1>
                </div>
            )
            )}
        </>
    )
}