import React, { useState } from 'react'
import Tasks from './tasks'
import Tasksboards from './tasksboards'
import img1 from 'C:/Users/LENOVO/Desktop/Study/todo/src/user.jpg'
import './header.css'

export default function Header() {
    const [active, setActive] = useState("Task");
    return (
        <div className = "header">
            <button key={1} className = "taskbutton" onClick = {() => setActive("Task")}> Tasks </button>
            <button key = {2} className = "boardbutton" onClick = {() => setActive("Board")}> Boards </button>
            <div>
                {/* {active === "Task" && <Tasks 
                id = "1"
                image = {img1}
                duration = "1h 20m"
                board = "name"
                heading = "heading"/>} */}
            </div>
        </div>
    )
}