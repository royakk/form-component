import BirthDay from './birthDay';
import NameInput from './NameInput';
import Nationalcode2 from './nationalcode2';
import Sheba from './sheba';
import Submit from './api/submit';

function Personal (){

return(
<div>
<NameInput nam="name" />
<NameInput nam="family"/>
<NameInput nam="f-name" />
<BirthDay nam="birthDate" />
<Nationalcode2  nam="nationalCode"/>
<Sheba nam="sheba" />
<Submit />
</div>
)
}
export default Personal;