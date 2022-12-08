import React from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
export default function App() {

/* let defaultTasks=[
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
*/
const [tasks,setTasks]=React.useState([])
const [showAddTask,setShowAddTask]=React.useState(true)

React.useEffect(()=>{

  getTasksFromServer()

},[])

const getTasksFromServer=async()=>{
  const getTasks=await fetchTasks()
  setTasks(getTasks)
}

// fetch tasks 

const fetchTasks=async ()=>{
const response=await fetch("http://localhost:5001/tasks");
const json=await response.json()
return json;
}


function deleteTask(id)
{
  deleteTaskFromServer(id)
  let filterTasks=tasks.filter(task=>task.id!=id);
  setTasks(filterTasks)
  
}

const deleteTaskFromServer=async(id)=>{
  const response=await fetch(`http://localhost:5001/tasks/${id}`,{
   method:'delete' 
  });
}


function ToggleColor(id)
{
 const fetchTaskFromServer=async(id)=>{
  const fetchData=await fetchOneTask(id)
  const updTask={...fetchData,reminder:!fetchData.reminder}

  const response=await fetch(`http://localhost:5001/tasks/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json',
    },
    body:JSON.stringify(updTask)
  })
  const editTask=await response.json();

  let Tasks=tasks.map(task=>{
    return task.id===id?{...task,reminder:!editTask.reminder}:task
   })
   setTasks(Tasks)
 }

 fetchTaskFromServer(id)
 /*
 let Tasks=tasks.map(task=>{
  return task.id===id?{...task,reminder:!task.reminder}:task
 })
 setTasks(Tasks)*/
}


const fetchOneTask=async(id)=>{
  const response=await fetch(`http://localhost:5001/tasks/${id}`);
  const json=await response.json();
  return json;
}



function addTask(task){
/*console.log(task)
const id=Math.floor(Math.random()*1000)+1
const newTask={id,...task}
setTasks([...tasks,newTask])*/
addTasktoServer(task)
}

const addTasktoServer=async(task)=>{
  const response=await fetch(`http://localhost:5001/tasks`,{
    method:'POST',
    headers:{
      'Content-type':'application/json',
    },
    body:JSON.stringify(task),
  })
  const json=await response.json();
  setTasks([...tasks,json])
}

function toggleShowAddTask(){
  setShowAddTask(prevState=>!prevState)
}

  return (
    <div>
<Header title={"App Tracker"} showAddTask={showAddTask} toggleShowAddTask={toggleShowAddTask}/>
    {showAddTask && <AddTask  Add={addTask} />}
    {tasks.length>0 ? <Tasks  Tasks={tasks} deleteTask={deleteTask} ToggleColor={ToggleColor}/>:"No Tasks" }
    </div>
    
  )
}
