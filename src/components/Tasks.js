import React from 'react'
import Task from './Task'
export default function Tasks(props) {
    const taskLists=props.Tasks.map(item=>{
        return (
            <Task key={item.id} task={item}/>
             
        )
    })

  return (
    <div>{taskLists}</div>
  )
}
