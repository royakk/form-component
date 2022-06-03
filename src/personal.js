import { useNavigate } from "react-router-dom";
import BirthDay from './birthDay';
import NameInput from './NameInput';
import Nationalcode2 from './nationalcode2';
import Sheba from './sheba';
import Submit from './api/submit';
import { createRef, useState } from 'react';
import axios from 'axios';
import Vlidator, {Vbirth, Vname, Vsheba, VnationalCode } from './validator'
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme"
import styles from './css/mystyle.css';


// const infocontex = React.createContext();

// const client=  axios.create({baseUrL:'https://reqres.in/api/users'});

function Personal (props){

const Navigate= useNavigate();
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

 function handleCallbackBirth (inputBirth){
    parentstate.date = inputBirth;
    setparentstate(parentstate);
    console.log(parentstate);
 }

 function handleCallbackCodM (inputCodeM){
    parentstate.codm = inputCodeM;
    setparentstate(parentstate);
    console.log(parentstate);
 }

 function handleCallbackSheba (inputSheba){
    parentstate.shebacode = inputSheba;
    setparentstate(parentstate);
    console.log(parentstate);
 }
 const createPostAPI = async ()=>{
    
         await axios.post ('https://reqres.in/api/users',parentstate)
        // console.log(response)
        // Navigate("/success")
        .then(res =>  Navigate("/success"))
}

 function handleSubmit (e){
    e.preventDefault();
    Vname(parentstate.name) && Vname(parentstate.family) && Vname(parentstate.fname)  && Vsheba(parentstate.shebacode) 
    && VnationalCode(parentstate.codm) ?   createPostAPI()   : Navigate("/notfound")
       console.log(Vname(parentstate.name))
       console.log(Vname(parentstate.name))
       console.log(Vname(parentstate.name))
       console.log (Vbirth(parentstate.date))
       console.log(VnationalCode(parentstate.codm))
       console.log(parentstate.codm)
       console.log(Vsheba(parentstate.shebacode))
       console.log(parentstate.shebacode)
  }

  

//  function handleCallbackSheba (inputSheba){
//     parentstate.shebacode = inputSheba;
//     setparentstate(parentstate);
    
//     console.log(parentstate);
//  }
return(
   <ThemeProvider theme={theme}> 
<div className='component'>

    <form onSubmit={handleSubmit}>
        <NameInput nam="name"  parentCallback={handleCallback} />
        <NameInput nam="family" parentCallback={handleCallbackFamily}/>
        <NameInput nam="f-name" parentCallback={handleCallbackFname}/>
        <BirthDay nam="birthDate" parentCallback={handleCallbackBirth} />
        <Nationalcode2  nam="nationalCode" parentCallback={handleCallbackCodM }/>
        <Sheba nam="sheba" parentCallback={handleCallbackSheba } />
        <Submit  sendInfo={parentstate.name} />
    </form>
   <div ref={myContainer}></div>

</div>
</ThemeProvider>
)

}
export default Personal;