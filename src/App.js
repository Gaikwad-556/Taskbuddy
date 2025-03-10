import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList'



export default function App() {
  let [tasks,setTask] = useState(()=>{
    return JSON.parse(localStorage.getItem("tasks")) || []
  });
 
  useEffect(()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  const addTask = (task) => {
    setTask([...tasks,task])
  }

  const updateTask = (index, updatedtask)=>{
    let newtask = [...tasks]
    newtask[index] = updatedtask
    setTask(newtask)
  }

  const deleteTask = (index) =>{
    setTask(tasks.filter((_,i)=>i !== index))
  }

  const clearTask = () => {
    setTask([])
  }

  return (
    <div className='App'>
        <header class="header">
          <div class="header-container">
            <h1 class="title">
              Task<span class="highlight">Buddy</span>
            </h1>
          <p class="tagline">Your friendly task manager</p>
        </div>
      </header>
      <TaskForm addTask = { addTask }/>  
      <TaskList tasks = {tasks} updateTask={updateTask} deleteTask={deleteTask}/> 
      <button className='clear-btn' onClick={clearTask}>Clear All Tasks</button>
    </div>
  )
}