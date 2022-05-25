import  { useState } from "react";
import {Vsheba} from './validator';

function Sheba(props) {
    const[input,setsheba]= useState("")
   const setsheba1= props.setsheba;
    return (
        <div className="sheba">
            <span>{props.nam}</span>
           <input type="text" value={input} onChange={e =>setsheba(e.target.value) } required  ></input> 
          <label >
           {
             input && !Vsheba(input) ? 'sheba incorrect' : ''
           }
         </label>  
        </div>
    );
}

export default Sheba;