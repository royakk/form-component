import { useState } from 'react';
import {Vname} from "./validator";

export default function NameInput (props){
  const [name,setname]=useState("")
   
  const onTrigger= (event)=> {
  setname (event.target.value);
    props.parentCallback(name);
}

   
    return(
        <div className="name">
          <span>{props.nam}</span>
          <input  type="text"   id={props.nam}  value={name} onChange={onTrigger} placeholder={props.nam} required  ></input> 
          <label >
           {
             name && !Vname(props.parentCallback) ? 'name incorrect' : ''
           }
         </label> 
        </div>
    );
  
}