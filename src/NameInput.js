import { useState } from "react"

export default function NameInput (nam){
    const [name,setname]=useState("")
    return(
        <div>
          <span>{nam}</span>
          <inpu type="text" value={name} placeholder="enter name"  ></inpu> 
          <label >
           {
              name && !Validator(name) ? 'name incorrect' : ''
           }
         </label> 
        </div>
    )
}