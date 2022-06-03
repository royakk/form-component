import React from "react";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Getapi from './get1'


export default function Home (props){
   
    const navigate = useNavigate();

    const handleClick = () => {
      // 👇️ navigate programmatically
      navigate('/Personal');
    }
    
    const handleClick2 = () => {
        // 👇️ navigate programmatically
        navigate('/get1');
      }
    return ( 
      <div>
        <div style={{margin : "10px"}}>
          
             <Button
            
            onClick={handleClick}
             variant="contained">ورود کاربر</Button> 
              </div>
<div style={{margin : "10px"}}>
            <Button
            onClick={handleClick2}
             variant="contained"> نمایش کاربران</Button> 
             </div>
             </div>
      
    );

}