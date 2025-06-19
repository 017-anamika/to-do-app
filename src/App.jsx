import React, { useState } from 'react';
import "./App.css";
import TaskForm from './components/TaskForm';
import './components/TaskForm.css';
import TaskColumn from './components/TaskColumn';
import todoicon from './assets/direct-hit.png'
import doingicon from './assets/glowing-star.png'
import doneicon from './assets/check-mark-button.png'
const App = () => {
  const [tasks,setTasks] = useState([]);
  const handleDelete = (taskIndex)=>{
    const newTasks = tasks.filter((task,index)=> index!=taskIndex)
    setTasks(newTasks)
  }
  return (
    <div className='app'>
      <TaskForm setTask={setTask}/>
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
