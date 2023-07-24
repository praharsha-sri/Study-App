import React from 'react'
import './general.css'

export default function General() {
    var showdate = new Date()
    var display = showdate.getDate() + "/" + (showdate.getMonth() + 1) + "/" + showdate.getFullYear();
    return (
        <div className = "general">
            <div className = "date"> {display} </div>
        </div>
    )
}