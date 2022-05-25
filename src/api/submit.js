
import { useState,} from "react";
import React from 'react';
import axios from 'axios'
function Postform(props) {
    const url=""
    const [value,setvalue]=useState({
        name:props.name,
        family:props.family,
        fname:props.fname,
        date:props.date,
        codm:props.codM,
        shebacode:props.shebacode
    }   
   )
    return (
        <div className="btn">
           <input type="submit" value="Submit" onClick={handleSubmit} /> 
        </div>
    );

}
const handleSubmit =(event)=>{
    event.preventDefault();
    axios.post(url,value)
    .then(res=>{console.log(res)})
 }
//  handleUpdat =(e)=>{
//     const newvalue={...value}
//     newvalue[e.target.value]=e.target.value;
//     setvalue(newvalue)
//     console.log(newvalue)
//  }

 
export default Postform;