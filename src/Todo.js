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
    <div style={styles.container}>
        <h1 style={styles.header}>Todo List App</h1>
        <div style={styles.inputcontainer}>
            <input type="text" value={newtask} 
            onChange={(e)=>setNewTasks(e.target.value)}
            placeholder="Add New Task"/>
            <button onClick={addTask} style={styles.addbutton}>Add Task</button>
        </div>
        <ul style={styles.tasklist}>
            {tasks.map((task,index)=>(
                <li key={index} style={styles.taskitem}>{task}
<button onClick={()=>removeTask(index)} style={styles.removebutton}>Remove</button>
                </li>
            ))}
        </ul>
    </div>
)


}

const styles={
    container:{
        maxWidth:'400px',
        margin:'auto',

    },
    header:{
       textAlign :"center",
       color:"#333",
    },
    inputcontainer:{
        display:"flex",
        marginBottom:"10px",
    },
    input:{
        flex:1,
        padding:"8px",
    },
    addbutton:{
      marginLeft:"10px",
      padding:"8px",
      cursor:"pointer"  
    },
    tasklist:{
        listStyle:"none",
        padding:0,

    },
    taskitem:{
        display:"flex",
        justifyContent: "space-between",
        alignItem:"center",
        border:"1px solid #ddd",
        padding:"8px",
        margiBottom:"8px",
    },
    removebutton:{
        padding:"5px",
        color:"#fff",
        background:"red",
        border:"none",
        cursor:"pointer"

    }

}
export default App