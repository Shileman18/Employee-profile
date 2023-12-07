import React, { useState } from "react";

const App=()=>{

    const[tasks,setTasks]=useState([]);
    const[newtask,setNewTasks]=useState('');
  
  
    let addTask=()=>{
    if(newtask.trim()!==''){
        setTasks([...tasks,newtask]);
        setNewTasks('');
        
    }
  }

const removeTask=(index)=>{
const updateTask=[...tasks];
updateTask.splice(index,1)
setTasks(updateTask)

}
return(
<div className="container">
     <div className="row">
        <div className="col-md-6 offset-md-3">
            <h2 className="mb-4">To-Do List</h2>
            <div className="mb-3">
                <input type="text" className="form-control"
                placeholder="Enter The Task" value={newtask}
                onChange={(e)=>setNewTasks(e.target.value)}/>
            </div>
            <button className="btn btn-primary" onClick={addTask}>Add Task</button>
      
      <ul className="list-group mt-4 row">
        {tasks.map((task,index)=>(
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {task}
                <button className="btn btn-danger" onClick={()=>removeTask(index)}>Remove </button> </li>
            
        )

        )}
      </ul>
        </div>
     </div>
</div>

)

}

export default App