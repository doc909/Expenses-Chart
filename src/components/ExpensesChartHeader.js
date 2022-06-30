import React from "react";
import './ExpensesChartHeader.css';

const ExpensesChartHeader = () => {
    return (
        <div className="expenses-chart-header">
            <div className="expenses-chart-header-content">
                <div className="expenses-chart-header-content-balance">
                    <span>My Balance</span>
                    <span>$921.48</span>
                </div>
                <div className="expenses-chart-header-content-logo">
                    <svg
                        width="72"
                        height="48"
                        viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="none" fill-rule="evenodd">
                            <circle fill="#382314" cx="48" cy="24" r="24"/>
                            <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default ExpensesChartHeader;