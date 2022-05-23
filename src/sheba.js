import  { useState } from "react";
import {Vsheba} from './validator';

function Sheba(props) {
    const[sheba,setsheba]= useState("")
    return (
        <div className="sheba">
            <span>{props.nam}</span>
           <input type="text" value={sheba} onChange={e =>setsheba(e.target.value) } required  ></input> 
          <label >
           {
              sheba && !Vsheba(sheba) ? 'sheba incorrect' : ''
           }
         </label>  
        </div>
    );
}

export default Sheba;