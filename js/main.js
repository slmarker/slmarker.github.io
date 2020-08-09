console.log("This is a console message");
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber)
}

function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Max 10 hambi lehet!");

    } else if (amountNumber < 1) {
        alert("Minimum 1 hambi!!!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
        alert("Fizetendő: " + amount + "Ft");
    }

}

// Add helptext.
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltétéket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

// parent.removeChild(helpText);



// Window event.
let sendButton = document.querySelector("form .btn.btn-primary");
/*
sendButton.onclick = function () {
    alert("Hello JS!");
*/
sendButton.addEventListener("click", function () {
    alert("Hello JS!");
});

window.addEventListener("resize", function () {
    console.log(this.innerHeight, this.innerWidth)
});



// Űrlap események
/*
let orderForm = document.querySelector("orderForm");
orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    console.log(this);
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log(values);
});
*/

// Elem szülője, parent elemek kezelése
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseFunction = function(ev){
        this.parentElement.style.display = "none";
};
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseFunction);

}


// Switch - a kapcsoló
new Date().getDay();

let weekDay = new Date().getDay();
switch(weekDay){
    case 0: dayName = "Vas";
    break;
    case 1: dayName = "Hét";
    break;
    case 2: dayName = "Ked";
    break;
    case 3: dayName = "Sze";
    break;
    case 4: dayName = "Csü";
    break;
    case 5: dayName = "Pén";
    break;
    case 6: dayName = "Szo";
    break;
    default: dayName="unknown";
}


// Select elem kitöltése
let toppings =[
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra sonka",
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while (index < toppings.length) {
    let option = document.createElement("option");
    option.value= index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}



