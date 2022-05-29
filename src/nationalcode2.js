import { useState } from 'react';
import  {VnationalCode}  from './validator';
 function Nationalcode2 (props){
    const [codM,setcodM]= useState("")
   
    const onTrigger= (event)=> {
      setcodM (event.target.value);
        props.parentCallback(codM);
     }
    
    return(
       
        <div className="nationalcode" >
        <span>{props.nam}</span>
        
         <input id='input' type="text" value={codM} onChange={onTrigger} onKeyUp={onTrigger} placeholder="___-______-_" />

         <label >
           {
              codM && !VnationalCode(codM) ? 'incorrect' : ''
           }
         </label>
 
        </div>
        
        )
    }
  export default Nationalcode2;
