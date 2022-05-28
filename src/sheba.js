import  { useState } from "react";
import {Vsheba} from './validator';

function Sheba(props) {
    const[input,setsheba]= useState("")

    const onTrigger= (event)=> {
      setsheba (event.target.value);
        props.parentCallback(input
          );
     }
    

    return (
        <div className="sheba">
            <span>{props.nam}</span>
           <input type="text" value={input} onChange={onTrigger } required  ></input> 
          <label >
           {
             input && !Vsheba(input) ? 'sheba incorrect' : ''
           }
         </label>  
        </div>
    );
}

export default Sheba;