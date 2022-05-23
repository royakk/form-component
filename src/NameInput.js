import { useState } from "react"

export default function NameInput (nam){
    const [name,setname]=useState("")
    return(
        <div>
          <span>{nam}</span>
          <inpu type="text" value={name} onChange={e =>setname(e.target.value) }placeholder={nam} required  ></inpu> 
          <label >
           {
              name && !Validator(name) ? 'name incorrect' : ''
           }
         </label> 
        </div>
    )
}