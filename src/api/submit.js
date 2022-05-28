
// import { useState,} from "react";
import React from 'react';
import axios from 'axios'
function Postform(props) {
    const url=""
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
           <input type="submit" value="Submit"  /> 
        </div>
    );

}
function handleSubmit (event){
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