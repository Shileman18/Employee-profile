import React, { useState } from "react";

// const Myform=()=>{
//     const[inputValue,setInputValue]=useState('');

// const handleInput=(event)=>{
//     event.preventDefault();
// }

// const handleChange=(event)=>{
//     setInputValue(event.target.value)
// }

//     return(
//         <form onSubmit={handleInput}> 
// <label>
//     <input type="" value={inputValue} onChange={handleChange}/>
// <p>Input Value: {inputValue}</p>
// <button type="submit">Submit</button>
// </label>

//         </form>

//     )
// }

const Myform=()=>{
    
const [isChecked,setIsChecked]=useState("")
const [selectedOption,setselectedoption]=useState('')

const handleCheckboxChange=()=>{
    setIsChecked(!isChecked)
}
const handleSelectChange=(event)=>{
    setselectedoption(event.target.value)
}

    return(
        <form>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>Check me!
            </label>
            <br/>
            <label>
                Select:
                <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="option1">Select an option1</option>
            <option value="option2">Select an option2</option>
                </select>
            </label>
        </form>
    )
}
export  default Myform