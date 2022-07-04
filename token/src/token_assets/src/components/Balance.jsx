import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token } from "../../../declarations/token";

function Balance() {
	const [input, setInput] = useState("");
	const [balance, setBalance] = useState(0);
	const [symbol, setSymbol] = useState("");
	const [isHidden, setIsHidden] = useState(true);

	async function handleClick() {
		const principal = Principal.fromText(input);
		const balance = await token.getbalance(principal);
		setBalance(balance.toLocaleString());
		setSymbol(await token.getSymbol());
		console.log(await token.getSymbol());
		setIsHidden(false);
	}

	return (
		<div className='window white'>
			<label>Check account token balance:</label>
			<p>
				<input
					id='balance-principal-id'
					type='text'
					placeholder='Enter a Principal ID'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</p>
			<p className='trade-buttons'>
				<button id='btn-request-balance' onClick={handleClick}>
					Check Balance
				</button>
			</p>
			{!isHidden && (
				<p>
					This account has a balance of {balance} {symbol}
				</p>
			)}
		</div>
	);
}

export default Balance;
