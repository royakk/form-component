import { useState } from 'react';
import  Validator  from './validator';
 function Nationalcode2 (){
    const [codM,setcodM]= useState("")
   
   

    return(
       
        <div>
        <span>کدملی</span>
        
         <input id='input' type="text" value={codM} onChange={e =>setcodM(e.target.value)} placeholder="___-______-_" />

         <label >
           {
              codM && !Validator(codM) ? 'incorrect' : ''
           }
         </label>
 
        </div>
        
        )
    }
  export default Nationalcode2;
