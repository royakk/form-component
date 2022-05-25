import { useState } from 'react';
import {Vname} from "./validator";

export default function NameInput (props){
    const [name,setname]=useState("");

    props.setname()
    return(
        <div className="name">
          <span>{props.nam}</span>
          <input  type="text"  className={props.class} id={props.nam} value={name} onChange={e =>setname(e.target.value) }placeholder={props.nam} required  ></input> 
          <label >
           {
              name && !Vname(name) ? 'name incorrect' : ''
           }
         </label> 
        </div>
    );
  
}