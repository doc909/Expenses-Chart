import React from 'react';
import { Bar } from 'react-chartjs-3';
import data from '../data';


const ExpensesChart = () => {
    const chartData = JSON.parse(JSON.stringify(data));
    const chartDataDays = chartData?.map(data => data.day);
    const chartDataAmount = chartData?.map(data => data.amount);

    return (
        <>
            <Bar
                data={{
                    labels: chartDataDays,
                    datasets: [{
                        label: 'Amount',
                        data: chartDataAmount,
                        backgroundColor: [
                            ' hsl(10, 79%, 65%)',
                            ' hsl(10, 79%, 65%)',
                            'hsl(186, 34%, 60%)',
                            ' hsl(10, 79%, 65%)',
                            ' hsl(10, 79%, 65%)',
                            ' hsl(10, 79%, 65%)',
                            ' hsl(10, 79%, 65%)'
                        ],
                    }]
                }}
                width={40}
                height={60}
            />
            <hr />
        </>
    )
};

export default ExpensesChart;