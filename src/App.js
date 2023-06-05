import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import Currency from './components/Currency';

const App = () => {
	const [showAlert, setShowAlert] = useState(true);

	return (
		<AppProvider>
			 {showAlert && (
				<div style={{position: 'fixed', top: 0, right: 0, backgroundColor: 'lightgray', padding: '10px'}}>
				You cannot reduce the budget value lower than then spending
				<button style={{marginLeft: 30}} onClick={() => setShowAlert(false)}>OK</button>
				</div>
			)}
			<div className='container'>
				<h1 className='mt-3'>Suneil England's Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
					<div className='col-sm'>
						<Currency />
					</div>
				</div>
					<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Change Allocation</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;
