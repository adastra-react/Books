import React,{useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// const [age, setAge] = useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

function Currency() {
  return (
      <div
          class='alert alert-secondary p-4'
      >
			 <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={20}
                    label="Age"
                    // onChange={handleChange}
                    >
                    <MenuItem value={20}>$ Dollar</MenuItem>
                    <MenuItem value={10}>$ Pound</MenuItem>
                    <MenuItem value={30}>₹ Rupee</MenuItem>
                    <MenuItem value={30}>€ Euro</MenuItem>
                    </Select>
                </FormControl>
            </Box>
		</div>
  )
}

export default Currency