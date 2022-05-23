import React, { useState } from 'react';
import  Validator  from './validator';

function birthDay() {
    const [birth,setbirth]=useState("")
    return (
        <div>
            <input type="date" value={birth} onChange={e =>setbirth(e.target.value)}></input>
            <label >
           {
              birth && !Validator(birth) ? 'incorrect' : ''
           }
         </label>
        </div>
    );
}

export default birthDay;