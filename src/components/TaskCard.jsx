import React from 'react';
import "./TaskCard.css";
import Tag from "./Tag";
import deleteicon from '../assets/delete.png';
const TaskCard = ({title,tags,handleDelete,index }) => {
  return (
    <article className='task-card'>
        <p className=''>This is sample text</p>
        <div className='task-card-bottom-line'>
            <div className='task-card-tags'>
                {
                tags.map((tag,index)=> (
                <tag key={index} tagName = {tag} selected = {true}/>)
                )}
            </div>
            <div className='task-delete' onClick={()=> handleDelete(index)}>
                <img  src =  {deleteicon} className='deleteicon' alt = ''/>
            </div> 
        </div>
    </article>
  )
}

export default TaskCard
