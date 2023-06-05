import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { TiDelete } from 'react-icons/ti';

import { AppContext } from '../context/AppContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);
	const { dispatch } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	const handleDeleteExpense = (id) => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: id,
		});
	};

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			{/* <input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/> */}
			<ul class='list-group mt-3 mb-3'>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
					<TableCell>Department</TableCell>
					<TableCell align="left">Allocated Budget</TableCell>
					<TableCell align="left">Increase by 10</TableCell>
					<TableCell align="left">Decrease by 10</TableCell>
					<TableCell align="left">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{filteredExpenses.map((expense) => (
					<TableRow
						key={expense.id}
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						<TableCell component="th" scope="row">
						{expense.name}
						</TableCell>
						<TableCell align="left">${expense.cost}</TableCell>
							<TableCell align="left">
								<AddCircleIcon color='success' />
							</TableCell>
							<TableCell align="left">
								<RemoveCircleIcon color='error' />
							</TableCell>
						<TableCell align="left">
							<TiDelete size='1.5em' onClick={() => {
									handleDeleteExpense(expense.id)
							}} />	
						</TableCell>
						
					</TableRow>
					))}
				</TableBody>
				</Table>
			</TableContainer>
				{/* {filteredExpenses.map((expense) => (
					
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))} */}
			</ul>
		</>
	);
};

export default ExpenseList;
