import BirthDay from './birthDay';
import NameInput from './NameInput';
import Nationalcode2 from './nationalcode2';
import Sheba from './sheba';
// import Submit from './api/submit';
import { createRef, useState } from 'react';
import React, { useRef } from "react";

// const infocontex = React.createContext();

function Personal (props){
const[parentstate,setparentstate]=useState({
    // شاید بشه به تعداد همه کامپوننت ها استیت ساخت
        //  name:props.setname,
        // family:props.setname,
        // fname:props.setname,
        // date:props.setvalue,
        // codm:props.setcodM,
        // shebacode:props.setsheba
        name:"",
        family:"",
        fname:"",
        date:"",
        codm:"",
        shebacode:""
    });
    const myContainer = createRef();

    function handleCallback  (inputname) {
        parentstate.name = inputname;
        setparentstate(parentstate);
        myContainer.current.innerHTML = inputname;
        console.log(myContainer);
        
        console.log(parentstate);
    }
    function handleCallbackFamily (inputfamily){
        parentstate.family = inputfamily;
        setparentstate(parentstate);
        
        console.log(parentstate);
    }
    function handleCallbackFname (inputfname){
        parentstate.fname = inputfname;
        setparentstate(parentstate);
        
        console.log(parentstate);
    }
return(
     
<div>

    <form >
        <NameInput nam="name"  parentCallback={handleCallback} />
        <NameInput nam="family" parentCallback={handleCallbackFamily}/>
        <NameInput nam="f-name" parentCallback={handleCallbackFname}/>
        <BirthDay nam="birthDate" setValue1={parentstate.date} />
        <Nationalcode2  nam="nationalCode" setcodM1={(parentstate.codm) }/>
        <Sheba nam="sheba" setsheba1={(parentstate.shebacode) } />
        {/* <Submit  sendInfo={parentstate} /> */}
    </form>
   <div ref={myContainer}></div>

</div>
)

}
export default Personal;