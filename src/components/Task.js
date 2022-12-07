import React from 'react'
import { FaTimes } from 'react-icons/fa'
export default function Task(props) {
  return (
    <div className={`task ${props.task.reminder?"reminder":""}`} >
        <FaTimes onClick={()=>props.delete(props.task.id)}  />
        <h1>{props.task.text}</h1>
        <h2>{props.task.day}</h2>
    </div>
  )
}
