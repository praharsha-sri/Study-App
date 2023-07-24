import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
import Datepicker from 'react-datepicker'
import 'C:/Users/LENOVO/Desktop/Study/todo/node_modules/react-datepicker/dist/react-datepicker.css'
import './add.css'

export default function Add({taskTitle, setTaskTitle, date1, setDate1, duration, setDuration, description, setDescription, board, setBoard, todos, setTodos, brr, setBrr, boardTitle, setBoardTitle, active, showAdd, setShow}) {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(true);
    };

    const onTaskTitleChange = (event) => {
        setTaskTitle(event.target.value)
    }

    const onBoardTitleChange = (event) => {
        setBoardTitle(event.target.value)
    }

    const onDurationChange = (event) => {
        setDuration(event.target.value)
    }
    const onDescChange = (event) => {
        setDescription(event.target.value)
    }
    const handleChange = (e) => {
        setBoard(e.target.value)
    }
    const changeDate = (e) => {
        setDate1(e.target.value)
    }
    const onTaskSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuid(), taskTitle: taskTitle, date1: date1, duration: duration, description: description, board: board, completed: false}]);
        setTaskTitle("");
        setDuration("");
        setDescription("");
        setBoard("None")
        setDate1(new Date())
        setShow('false')
    }
    const onBoardSubmit = (event) => {
        event.preventDefault();
        setBrr([...brr, {id: uuid(), boardTitle: boardTitle}]);
        setBoardTitle("");
        setShow('false')
    }

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    return (
        <>
            {showAdd === 'true' && active === 'Task' &&
            <form className = 'task' onSubmit={onTaskSubmit}>
            <div className='close'>
                <h1 className='addtask'> Add a Task </h1>
                <box-icon name='x' size='md' color = 'black' onClick={() => setShow('false')}></box-icon>
            </div>
            <h2> Title</h2>
            <input type='text' placeholder='Enter title' className='c' value = {taskTitle} required onChange={onTaskTitleChange}></input>
            <h2> Due Date </h2>
            <div className='cal'>
                <box-icon name='calendar' onClick = {handleClick} size = 'lg'></box-icon>
                {isShown && <Datepicker selected={date1} onChange={date1 => setDate1(date1)} dateFormat='dd/MM/yyyy' minDate={new Date()} onClick = {changeDate}/>}
            </div>
            <h2> Duration </h2>
            <input type='text' placeholder='hh:mm' className='c' value = {duration} required onChange={onDurationChange}></input>
            <h2> Description </h2>
            <input type='text' placeholder='Descibe the task' className='c' value = {description} required onChange={onDescChange}></input>
            <h2> Select a board</h2>
            <select value={board} onChange={handleChange}>  
                <option value = "None"> None </option>
                {brr.map((b) => <option value={b.boardTitle}> {b.boardTitle} </option>)} 
            </select>
            <br></br>
            <input type = 'submit' value = 'Add Task' className='submit'></input>
            </form>}

            {showAdd === 'true' && active === 'Board' &&
            <form className = 'board' onSubmit={onBoardSubmit}>
            <div className='close'>
                <h1 className='addboard'> Create Board </h1>
                <box-icon name='x' size='md' color = 'black' onClick={() => setShow('false')}></box-icon>
            </div>
            <h2> Title </h2>
            <input type='text' placeholder='Enter title' className='c' value = {boardTitle} required onChange={onBoardTitleChange}></input>
            <br></br>
            <input type = 'submit' value = 'Create Board' className='submit'></input>
            </form>}
        </>
        
    )
}