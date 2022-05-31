import  { useState } from "react";
import {Vsheba} from './validator';

function Sheba(props) {
    const[input,setsheba]= useState("")

    const onTrigger= (event)=> {
      setsheba (event.target.value);
        props.parentCallback(input
          );
     }
     const handlePaste = (event) => {
      setsheba(event.clipboardData.getData('value'));
      props.parentCallback(input
        );
    };

    return (
        <div className="sheba">
            <span>{props.nam}</span>
           <input type="text" value={input} onChange={onTrigger } onClick={onTrigger} onKeyUp={onTrigger} onPaste ={handlePaste} required  placeholder="IR-" ></input> 
          <label >
           {
             input && !Vsheba(input) ? 'sheba incorrect' : ''
           }
         </label>  
        </div>
    );
}

export default Sheba;