import React from 'react'

export default function AddTask() {
  return (
    <form>
        <div>
            <label>
                Task
            </label>
            <input type="text" placeholder='Add Task'></input>
        </div>
        <div>
            <label>
             Day & Time
            </label>
            <input type="text" placeholder='Add Day & Time'></input>
        </div>
        <div>
            <label>
                Set Reminder
            </label>
            <input type="checkbox"></input>
        </div>
        <input type="submit" value="save task" />
    </form>

  )
}
