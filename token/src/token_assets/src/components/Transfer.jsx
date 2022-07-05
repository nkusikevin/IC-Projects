import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token } from "../../../declarations/token";

function Transfer() {
	const [res, setRes] = useState("");
	const [isHidden, setisHidden] = useState(true);
	const [isDisable, setIsDisable] = useState(false);
	const [amount, setAmount] = useState(0);
	const [to, setTo] = useState("");

	async function handleClick() {
		setIsDisable(true);
		const recipient = Principal.fromText(to);
		const amountTrans = Number(amount);
		const res = await token.transfer(recipient, amountTrans);
		setRes(res);
		setisHidden(false);
		setIsDisable(false);
	}

	return (
		<div className='window white'>
			<div className='transfer'>
				<fieldset>
					<legend>To Account:</legend>
					<ul>
						<li>
							<input
								type='text'
								id='transfer-to-id'
								value={to}
								onChange={(e) => setTo(e.target.value)}
							/>
						</li>
					</ul>
				</fieldset>
				<fieldset>
					<legend>Amount:</legend>
					<ul>
						<li>
							<input
								type='number'
								id='amount'
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</li>
					</ul>
				</fieldset>
				<p className='trade-buttons'>
					<button id='btn-transfer' onClick={handleClick} disabled={isDisable}>
						Transfer
					</button>
				</p>
				<p hidden={isHidden}>{res}</p>
			</div>
		</div>
	);
}

export default Transfer;
