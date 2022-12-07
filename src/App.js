import React from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
export default function App() {

 const defaultTasks=[
    {
        id:1,
        text:"doctor appointment",
        day:"day 1",
        remember:false,
    },
    {
        id:2,
        text:"Meeting at School",
        day:"day 2",
        remember:false,
    },
    {
        id:3,
        text:"Food Shopping",
        day:"day 3",
        remember:true
    }
]


  return (
    <div>

<Header title={"App Tracker"}/>
    <AddTask />
    <Tasks  Tasks={defaultTasks}/>
    </div>
    
  )
}
