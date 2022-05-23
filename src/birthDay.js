import { useState } from 'react';
import  {Vbirth}  from './validator';

function BirthDay(props) {
    const [birth,setbirth]=useState("")
    return (
        <div className="birth">
            <span>{props.nam}</span>
            <input type="date" value={birth} onChange={e =>setbirth(e.target.value)}></input>
            <label >
           {
              birth && !Vbirth(birth) ? 'birth incorrect' : ''
           }
         </label>
        </div>
    );
}

export default BirthDay;