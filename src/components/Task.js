import React from 'react'
import { FaTimes } from 'react-icons/fa'
export default function Task(props) {
  return (
    <div className={`task ${props.task.reminder?"reminder":""}`} onDoubleClick={()=>props.ToggleColor(props.task.id)}>
        <div><FaTimes onClick={()=>props.deleteTask(props.task.id)} style={{color:"red"}}/></div>
        <h1>{props.task.text}</h1>
        <h2>{`Day: ${props.task.day}`}</h2>
    </div>
  )
}
