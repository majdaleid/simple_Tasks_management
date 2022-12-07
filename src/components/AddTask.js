import React from 'react'

export default function AddTask(props) {

const [text,setText]=React.useState('')
const [day,setDay]=React.useState('')
const [reminder,setReminder]=React.useState(false);
function onSubmit(e)
{
    e.preventDefault()
    if(!text){
        alert('please add a task')
    }
props.Add({text,day,reminder})
setText('')
setDay('')
setReminder(false)
}
  return (
    <form onSubmit={onSubmit}>
        <div>
            <label>
                Task
            </label>
            <input type="text" placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div>
            <label>
             Day & Time
            </label>
            <input type="text" placeholder='Add Day & Time' value={day} onChange={(e)=>setDay(e.target.value)}></input>
        </div>
        <div>
            <label>
                Set Reminder
            </label>
            <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type="submit" value="save task" />
    </form>

  )
}
