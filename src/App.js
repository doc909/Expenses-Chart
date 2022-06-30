import './App.css';
import ExpensesChartHeader from './components/ExpensesChartHeader';
import ExpensesChartBody from './components/ExpensesChartBody';

const App = () => {
	return (
		<div className='expenses-chart-wrapper'>
			<ExpensesChartHeader />
			<ExpensesChartBody />
		</div>
	);
}

export default App;
