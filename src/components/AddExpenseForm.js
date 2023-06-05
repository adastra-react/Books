import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const [department, setDepartment] = React.useState('');
	const [allocation, setAllocation] = React.useState('');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleAllcoationChange = (event) => {
    setAllocation(event.target.value);
  };

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				// height: 300,
			}}
		>
			<div class='row'>
			<div
					// class='col-sm col-lg-4'
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							background: '#E2E3E5',
							height: 56,
							width: 140,
							display: 'grid',
							placeItems: 'center'

						}}
					>
						<label for='name'>Department</label>
					</div>
					<Box sx={{ minWidth: 140 }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Marketing</InputLabel>
							<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={department}
							label="Department"
							onChange={handleChange}
							>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</div>
				<div
					// class='col-sm col-lg-4'
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						marginLeft: 50,
					}}
				>
					<div
						style={{
							background: '#E2E3E5',
							height: 56,
							width: 140,
							display: 'grid',
							placeItems: 'center'

						}}
					>
						<label for='name'>Allocation</label>
					</div>
					<Box sx={{ minWidth: 120 }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Add</InputLabel>
							<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={allocation}
							label="Allocation"
							onChange={handleAllcoationChange}
							>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</div>
				<div
					// class='col-sm col-lg-4'
					style={{
						display: 'flex',
						flexDirection: 'row',
						marginLeft: 50,
						alignItems: 'center',
					}}
				>
					<label for='cost'>$</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div
				// class='row mt-3'
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginLeft: 50,
					alignItems: 'center',
				}}
			>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
