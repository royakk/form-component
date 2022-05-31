

import PanToolIcon from '@mui/icons-material/PanTool';
import * as React from 'react';
import Button from '@mui/material/Button';

function Postform(props) {

    console.log("======================");

    // console.log(props);
    // console.log(props.sendInfo);
    
    // const value=props.sendInfo
    // const [childstate,setchildstate]= useState(props.sendInfo)
   
        // console.log(childstate);
        console.log("====================");
//     }   
//    )

    return (
        <div className="btn">
            <Button
            type='submit'
            // onClick={() => { console.log('onClick'); }}
             variant="contained">ثبت نام</Button> 
           <PanToolIcon />
           
           
        </div>
    );


// function handleSubmit (e, value){
//     // e.preventDefault();
//     // callCreateAPI(value);
// }



} 
 
export default Postform;