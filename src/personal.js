import BirthDay from './birthDay';
import NameInput from './NameInput';
import Nationalcode2 from './nationalcode2';
import Sheba from './sheba';
import Submit from './api/submit';
import { useState } from 'react';

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
    })
    function handleCallback  (inputname) {
        const newinput= [...parentstate]
        newinput.name=inputname 
        setparentstate({newinput})
    }
return(
<div>
<NameInput nam="name"  parentCallback={handleCallback} />
<NameInput nam="family" setname2={(parentstate.name) }/>
<NameInput nam="f-name" setname3={(parentstate.name) }/>
<BirthDay nam="birthDate" setValue1={parentstate.date} />
<Nationalcode2  nam="nationalCode" setcodM1={(parentstate.codm) }/>
<Sheba nam="sheba" setsheba1={(parentstate.shebacode) } />
<Submit  sendInfo={parentstate} />
</div>
)

}
export default Personal;