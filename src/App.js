import React from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
export default function App() {

 let defaultTasks=[
    {
        id:1,
        text:"doctor appointment",
        day:"day 1",
        reminder:false,
    },
    {
        id:2,
        text:"Meeting at School",
        day:"day 2",
        reminder:false,
    },
    {
        id:3,
        text:"Food Shopping",
        day:"day 3",
        reminder:true
    }
]

const [tasks,setTasks]=React.useState(defaultTasks)

function deleteTask(id)
{
  let filterTasks=tasks.filter(task=>task.id!=id);
  setTasks(filterTasks)
  
}

  return (
    <div>
<Header title={"App Tracker"}/>
    <AddTask />
    <Tasks  Tasks={tasks} deleteTask={deleteTask}/>
    </div>
    
  )
}
