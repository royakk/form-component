import BirthDay from './birthDay';
import NameInput from './NameInput';
import Nationalcode2 from './nationalcode2';
import Sheba from './sheba';

function Personal (){





return(
<div>
<NameInput nam="name" />
<NameInput nam="family"/>
<NameInput nam="f-name" />
<BirthDay nam="birthDay" />
<Nationalcode2  nam="nationalCode"/>
<Sheba nam="sheba" />
</div>
)
}
export default Personal;