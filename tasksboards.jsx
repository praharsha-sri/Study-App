import React, { useState } from 'react'
import './tasksboards.css'
import Todolist from './todolist'
import Boards from './boards'
import Add from './add'
import img1 from 'C:/Users/LENOVO/Desktop/Study/todo/src/user.jpg'
import img2 from 'C:/Users/LENOVO/Desktop/Study/todo/src/user.jpg'
import img3 from 'C:/Users/LENOVO/Desktop/Study/todo/src/user.jpg'

export default function Tasksboards(props) {
    const [active, setActive] = useState("Task");
    const [completedScreen, setCompletedScreen] = useState('false')
    const [add, setAdd] = useState("");
    const [taskTitle, setTaskTitle] = useState('')
    const [date1, setDate1] = useState(new Date())
    const [duration, setDuration] = useState('')
    const [description, setDescription] = useState('')
    const [board, setBoard] = useState("None")
    const [todos, setTodos] = useState([])
    const [brr, setBrr] = useState([])
    const [day, setDay] = useState(1)
    const [boardTitle, setBoardTitle] = useState('')
    const [showAdd, setShow] = useState('true')

    const selectDay = name => {
        setDay(name)
    }

    const handleAdd = () => {
        setAdd("Yes");
        setShow("true");
        setTaskTitle("");
        setDuration("");
        setDescription("");
        setBoard("None")
        setBoardTitle("")
        // setDate1(new Date())
    }
    return (
        <>
            <div className = "header">
                <button key={1} className = "taskbutton" onClick = {() => setActive("Task")}> Tasks </button>
                <button key = {2} className = "boardbutton" onClick = {() => setActive("Board")}> Boards </button>
                
                    {/* {active === "Task" && <Tasks 
                    id = "1"
                    image = {img1}
                    duration = "1h 20m"
                    board = "name"
                    heading = "heading"/>} */}
           
            </div>
            <div className = "tasksboards">
                <div className='status'>
                    <button key={3} className = "a"  onClick={() => setCompletedScreen('false')}> Active </button>
                    <button key={4} className = "a" onClick={() => setCompletedScreen('true')}> Done </button>
                </div>
                {active === 'Task' && <div className = 'days'>
                    <button key={5} className = 'b' onClick={() => setDay(1)}> Mon </button>
                    <button key={6} className = 'b' onClick={() => setDay(2)}> Tue </button>
                    <button key={7} className = 'b' onClick={() => setDay(3)}> Wed </button>
                    <button key={8} className = 'b' onClick={() => setDay(4)}> Thu </button>
                    <button key={9} className = 'b' onClick={() => setDay(5)}> Fri </button>
                    <button key={10} className = 'b' onClick={() => setDay(6)}> Sat </button>
                    <button key={11} className = 'b' onClick={() => setDay(0)}> Sun </button>
                </div>}

                {active === 'Task' && <Todolist todos = {todos} setTodos={setTodos} completedScreen={completedScreen} setCompletedScreen={setCompletedScreen} day={day} setDay={setDay} />}
                {active === 'Board' && <Boards brr = {brr} setBrr = {setBrr} todos = {todos}/>}
                {/* <div>
                {day === {todos.date1.toDateString().slice(0, 4)} && <Todolist todos = {todos} setTodos = {setTodos} /> }
                </div> */}
                <div className='icon'><box-icon name='plus-circle' type='solid' animation='fade-up' color='#2383C4' size='100px' onClick = {handleAdd}></box-icon></div>
                <div>
                    {add === "Yes" && <Add 
                    taskTitle = {taskTitle}
                    setTaskTitle = {setTaskTitle}
                    date1 = {date1}
                    setDate1 = {setDate1}
                    duration = {duration}
                    setDuration = {setDuration}
                    description = {description}
                    setDescription = {setDescription}
                    board = {board}
                    setBoard = {setBoard}
                    todos = {todos}
                    setTodos = {setTodos}
                    brr = {brr}
                    setBrr = {setBrr}
                    boardTitle = {boardTitle}
                    setBoardTitle = {setBoardTitle}
                    active = {active}
                    showAdd = {showAdd}
                    setShow = {setShow}
                    />}
                </div>
                
            </div>
        </>
    )
}
