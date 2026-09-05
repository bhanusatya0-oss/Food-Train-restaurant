"use strict";
let coke = document.getElementById("coke");
let cokequantity = document.getElementById("cokequantity");
let pepsi = document.getElementById("pepsi");
let pepsiquantity = document.getElementById("pepsiquantity");
let freshlime = document.getElementById("freshlime");
let freshlimequantity = document.getElementById("freshlimequantity");
let beverageresult = document.getElementById("beverageresult");
function calculateBeverage() {
    let total = 0;
    if (coke.checked) {
        total = total +
            50 * Number(cokequantity.value);
    }
    if (pepsi.checked) {
        total = total +
            50 * Number(pepsiquantity.value);
    }
    if (freshlime.checked) {
        total = total +
            80 * Number(freshlimequantity.value);
    }
    beverageresult.innerHTML =
        "Beverage Total: ₹" + total;
    localStorage.setItem("beverageTotal", total.toString());
}
