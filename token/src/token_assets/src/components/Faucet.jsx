import React, { useState } from "react";
import { token, canisterId, createActor } from "../../../declarations/token";
import { AuthClient } from "@dfinity/auth-client";

function Faucet({ user }) {
	const [res, setRes] = useState("");
	const [isDisable, setIsDisable] = useState(false);
	async function handleClick(event) {
		event.preventDefault();
		setIsDisable(true);

		const authClient = await AuthClient.create();
		const identity = await authClient.getIdentity();

		const authenticatedCanister = createActor(canisterId, {
			agentOptions: {
				identity,
			},
		});

		const res = await authenticatedCanister.payOut();
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
			<label>{user}</label>
			<p className='trade-buttons'>
				<button id='btn-payout' onClick={handleClick} disabled={isDisable}>
					{res ? res : "	Gimme gimme"}
				</button>
			</p>
		</div>
	);
}

export default Faucet;
