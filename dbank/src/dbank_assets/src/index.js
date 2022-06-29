import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async () => {
	const currentAmount = await dbank.checkBalance();
	document.getElementById("value").innerHTML =
		Math.round(currentAmount * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async (e) => {
	e.preventDefault();
	const balanceAmount = await dbank.checkBalance();
	const button = e.target.querySelector("#submit-btn");

	const inputAmount = parseFloat(document.getElementById("input-amount").value);

	const outputAmount = parseFloat(
		document.getElementById("withdrawal-amount").value
	);

	button.setAttribute("disabled", true);

	if (document.getElementById("input-amount").value.length != 0) {
		await dbank.topUp(inputAmount);
	}

	if (document.getElementById("withdrawal-amount").value.length != 0) {
		await dbank.withdraw(outputAmount);
	}

	await dbank.compound();

	await update();

	document.getElementById("input-amount").value = "";
	button.removeAttribute("disabled");
});

async function update() {
	const currentAmount = await dbank.checkBalance();
	document.getElementById("value").innerHTML =
		Math.round(currentAmount * 100) / 100;
}
