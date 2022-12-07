import React from 'react'

export default function Task(props) {
  return (
    <div>
        <h1>{props.task.text}</h1>
        <h2>{props.task.day}</h2>
    </div>
  )
}
