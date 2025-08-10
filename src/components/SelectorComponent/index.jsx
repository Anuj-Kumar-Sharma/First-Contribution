import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from "react-redux";
import {setSelectedValue} from "../../slice/index"

export default function SelectorComponent({name, values} ) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value)
    dispatch(setSelectedValue(e.target.value));
  };

  return (
    <Box sx={{ minWidth: 120, height:50}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values}
          label={name}
          onChange={(e)=> handleChange(e)}
        >
          {values?.map(item => <MenuItem value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
