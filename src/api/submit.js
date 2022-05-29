
// import { useState,} from "react";
import React, { useState } from 'react';




function Postform(props) {

    console.log("======================");

    console.log(props);
    console.log(props.sendInfo);
    
    // const value=props.sendInfo
    const [childstate,setchildstate]= useState(props.sendInfo)
    // const [value,setvalue]=useState({
        // name:props.setname1,
        // family:props.setname2,
        // fname:props.setname3,
        // date:props.setValue1,
        // codm:props.setcodM1,
        // shebacode:props.setsheba1
        console.log(childstate);
        console.log("====================");
//     }   
//    )

// const handleSubmit = new Promise ((childstate) => {
//     // e.preventDefault();
    
//     let response = client.post('', childstate );
//     console.log(response);
  
//   });
    return (
        <div className="btn">
           <input type="submit" value="Submit"   /> 
        </div>
    );


// function handleSubmit (e, value){
//     // e.preventDefault();
//     // callCreateAPI(value);
// }



} 
 
export default Postform;