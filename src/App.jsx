import React, { useState,useEffect } from 'react';
import "./App.css";
import TaskForm from './components/TaskForm';
import './components/TaskForm.css';
import TaskColumn from './components/TaskColumn';
import todoicon from './assets/direct-hit.png'
import doingicon from './assets/glowing-star.png'
import doneicon from './assets/check-mark-button.png'

const oldTasks = localStorage.getItem("tasks")
const App = () => {
  const [tasks,setTasks] = useState(JSON.parse(oldTasks));
  useEffect(()=>{localStorage.setItem("tasks",JSON.stringify(tasks))},
  [tasks])
  const handleDelete = (taskIndex)=>{
    const newTasks = tasks.filter((task,index)=> index!=taskIndex)
    setTasks(newTasks)
  }
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app-main'>
        <TaskColumn 
              title='to-do' 
              icon = {todoicon} 
              tasks={tasks} 
              status ="todo"
              handleDelete = {handleDelete}

        />
        <TaskColumn 
              title='doing'
              icon = {doingicon} 
              tasks={tasks} 
              status ="doing"
              handleDelete = {handleDelete}
        />
        <TaskColumn 
              title='done'
              icon = {doneicon} 
              tasks={tasks} 
              status ="done"
              handleDelete = {handleDelete}
         />
      </main>
    </div>
  )
}

export default App
