import React from 'react';
import './ExpensesChartBody.css';
import ExpensesChart from './ExpensesChart';

const ExpensesChartBody = () => {
	return (
		<div className="expenses-chart-body-wrapper">
			<div className="expenses-chart-body-header">
				<p>Spending - Last 7 Days</p>
				<ExpensesChart />
			</div>
		</div>
	);
};

export default ExpensesChartBody;