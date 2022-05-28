import { useState } from 'react';
import  {VnationalCode}  from './validator';
 function Nationalcode2 (props){
    const [codM,setcodM]= useState("")
   

    return(
       
        <div className="nationalcode" >
        <span>{props.nam}</span>
        
         <input id='input' type="text" value={codM} onChange={e =>setcodM(e.target.value)} placeholder="___-______-_" />

         <label >
           {
              codM && !VnationalCode(codM) ? 'incorrect' : ''
           }
         </label>
 
        </div>
        
        )
    }
  export default Nationalcode2;
