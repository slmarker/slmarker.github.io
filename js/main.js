console.log("This is a console message");
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    amountNumber=  isNaN(amountNumber) ? 0: amountNumber;
    if (amountNumber > 10)
    {
        alert("Max 10 hambi lehet!");

    } else if (amountNumber < 1) {
        alert("Minimum 1 hambi!!!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
        alert("Fizetendő: " + amount + "Ft");
    }

}
