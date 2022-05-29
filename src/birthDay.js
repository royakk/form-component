import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { event } from 'jquery';

export default function BirthDay(props) {
  const [currdate, setCurrDate] = React.useState(new Date());
  console.log("=========================");
  console.log(currdate);
  console.log("==============================");

  function handleChange (event) {
    setCurrDate (event.target.value);
    setCurrDate(new Date(event.currdate).toLocaleDateString('fa-IR'))
    props.parentCallback(setCurrDate)
 }
 
  return (
    <div className='date'>
      <span>{props.nam}</span>
    <LocalizationProvider dateAdapter={AdapterJalali}>
      <DatePicker
        mask="____/__/__"
        value={currdate}
        inputFormat={"yyyy/MM/dd"}
        onChange={(event)=>setCurrDate(event)}
        calltriger={handleChange}
        renderInput={(params) => <TextField {...params} />}
        
      />
    </LocalizationProvider>
    </div>
  );
}