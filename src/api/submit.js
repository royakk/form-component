
import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios'
function Submit() {
    const [value,setvalue]=useState("")
    return (
        <div className="btn">
           <input type="submit" value="Submit"  /> 
        </div>
    );
}
// useEffect(() => {
//     const requestOptions = {
//         method: 'POST',
    
//     };
//     fetch('#####', requestOptions)
    

// }, []);
// handleSubmit =(event)=>{

// }
export default Submit;