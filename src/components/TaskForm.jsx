import React,{useState} from 'react';
import "./TaskForm.css";
// import Tag "./Tag.jsx";
const TaskForm = ({setTasks}) => {
      const [taskData,setTaskData] = useState({
        task:"",
        status:"todo",
        tags:[],
      })
      const checkTag = (tag) =>{
        return taskData.tags.some((item)=> item === tag)
      }
       const selectTag = (tag)=>{
        if(taskData.tags.some(item0=> item === tag)){
          const filterTags = taskData.tags.filter((item)=> item!=tag);
          setTaskData((prev)=>{
            return {...prev,tags : filterTags};
          })
        }
        else{
          setTaskData((prev)=>{
            return {...prev,tags:[...prev.tags,tag]};
          })
        } 
       }
      const handleChange =(e)=>{
        const {name,value} = e.target;
        setTaskData(prev =>{
          return {...prev,[name]:value}
        })
      };
      const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(taskData);  
        setTasks(prev=>{
          return [...prev,taskData];
        })
        setTaskData({
           task:"",
        status:"todo",
        tags:[],
        });
      };
      //  console.log(taskData);
      // const 

   const [task,setTask] = useState('');
   const [status,setStatus]=useState("todo");
   const handleTaskChange = (e)=>{
    setTask(e.target.value)
   };
   const handleStatusChange = (e)=>{
    setStatus(e.target.value)
   };
  return (
    <div>
      <header className='app-header'>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        name = "task"
        className='task-input '
         placeholder='Enter your task'
         onChange={ handleChange}
         />

        <div className='task-form-bottom-line'>
          <div>
             <tag tagName="HTML" selectTag=
             {selectTag}/>
             <tag tagName="css" selectTag=
             {selectTag}/>
             <tag tagName="js" selectTag=
             {selectTag}/>
             <tag tagName="react" selectTag=
             {selectTag}/>
          </div>

          <div>
          <select 
          name = "status"
          className='task-status'
          onChange={handleChange}>
            <option value="todo">To-do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          </div>
          <button type='submit' className='task-submit'>+Add Task</button>
         
        </div>
      </form>
       </header>
    </div>
  )
}

export default TaskForm
