import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function BirthDay(props) {
  const [value, setValue] = React.useState(new Date());
 const  setValue1=props.setValue();
  return (
    <div className='date'>
      <span>{props.nam}</span>
    <LocalizationProvider dateAdapter={AdapterJalali}>
      <DatePicker
        mask="____/__/__"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
        
      />
    </LocalizationProvider>
    </div>
  );
}