import React, { useState } from "react";
import { token } from "../../../declarations/token";

function Faucet() {
	const [res, setRes] = useState("");
	const [isDisable, setIsDisable] = useState(false);
	async function handleClick(event) {
		event.preventDefault();
		setIsDisable(true);
		const res = await token.payOut();
		setRes(res);
	}

	return (
		<div className='blue window'>
			<h2>
				<span role='img' aria-label='tap emoji'>
					🚰
				</span>
				Faucet
			</h2>
			<label>
				Get your free DANK tokens here! Claim 10,000 DANK coins to your account.
			</label>
			<p className='trade-buttons'>
				<button id='btn-payout' onClick={handleClick} disabled={isDisable}>
					{res ? res : "	Gimme gimme"}
				</button>
			</p>
		</div>
	);
}

export default Faucet;
