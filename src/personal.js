import BirthDay from './birthDay';
import NameInput from './NameInput';
import Nationalcode2 from './nationalcode2';
import Sheba from './sheba';
import Submit from './api/submit';
import { useState } from 'react';

function Personal (props){
const[parentstate,setparentstate]=useState({
         name:props.setname,
        family:props.setname,
        fname:props.setname,
        date:props.setvalue,
        codm:props.setcodM,
        shebacode:props.setsheba
    })
return(
<div>
<NameInput nam="name"  setname1={(parentstate.name) }/>
<NameInput nam="family" setname2={(parentstate.name) }/>
<NameInput nam="f-name" setname3={(parentstate.name) }/>
<BirthDay nam="birthDate" setValue1={parentstate.date} />
<Nationalcode2  nam="nationalCode" setcodM1={(parentstate.codm) }/>
<Sheba nam="sheba" setsheba1={(parentstate.shebacode) } />
<Submit parentstate />
</div>
)
}
export default Personal;