import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const isNegative = transaction.amount < 0;
	const sign = isNegative ? '-' : '+';
	const listClass = isNegative ? 'minus' : 'plus';
	return (
		<li className={listClass}>
			{transaction.text}{' '}
			<span>
				{sign}${Math.abs(transaction.amount)}
			</span>
			<button
				className="delete-btn"
				onClick={() => deleteTransaction(transaction.id)}
			>
				x
			</button>
		</li>
	);
};

export default Transaction;
