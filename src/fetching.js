import React, { useEffect, useState } from "react";
 
function Datafetching(){
const [data,setData]= useState([]);
 
useEffect(()=>{
const Fetchin= async ()=>{
    try{
        const fech= await fetch(
            "https://jsonplaceholder.typicode.com/users"
            );
       
    const respon= await fech.json();
   
  setData(respon);
    } catch(error){
        console.error("errrr",error)
    }
};
Fetchin();

})

 return (  <>
        <div>
        {data.map((item)=>(
            <p key={item.id}>{item.name}</p>
        )) }
        </div>
        </>
        );
    
}
export default Datafetching;