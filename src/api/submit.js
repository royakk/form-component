
// import { useState,} from "react";
import React from 'react';
import axios from 'axios'
function Postform(props) {
    const url='https://reqres.in/api/users?page=2'
    const value={...props.sendInfo}
    // const [value,setvalue]=useState({
        // name:props.setname1,
        // family:props.setname2,
        // fname:props.setname3,
        // date:props.setValue1,
        // codm:props.setcodM1,
        // shebacode:props.setsheba1
        
//     }   
//    )
    return (
        <div className="btn">
           <input type="submit" value="Submit"  onClick={()=>handleSubmit(value)} /> 
        </div>
    );

}
const handleSubmit =async (value)=>{
    
   const res=await axios.post('https://reqres.in/api/users?page=2',value)
    console.log(res)
    console.log(value)
}
//  handleUpdat =(e)=>{
//     const newvalue={...value}
//     newvalue[e.target.value]=e.target.value;
//     setvalue(newvalue)
//     console.log(newvalue)
//  }

 
export default Postform;