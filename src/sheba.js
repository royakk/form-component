import React, { useState } from 'react';

function sheba(props) {
    const[sheba,setsheba]= useState("")
    return (
        <div>
           <inpu type="text" value={sheba} onChange={e =>setsheba(e.target.value) } required  ></inpu> 
          <label >
           {
              sheba && !Validator(sheba) ? 'name incorrect' : ''
           }
         </label>  
        </div>
    );
}

export default sheba;