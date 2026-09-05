"use strict";
let chickenmajestic = document.getElementById("chickenmajestic");
let chickenmajesticquantity = document.getElementById("chickenmajesticquantity");
let mushroom = document.getElementById("mushroom");
let mushroomquantity = document.getElementById("mushroomquantity");
let dragonchicken = document.getElementById("dragonchicken");
let dragonquantity = document.getElementById("dragonquantity");
let starterresult = document.getElementById("starterresult");
function calculateStarter() {
    let total = 0;
    if (chickenmajestic.checked) {
        total = total +
            250 * Number(chickenmajesticquantity.value);
    }
    if (mushroom.checked) {
        total = total +
            200 * Number(mushroomquantity.value);
    }
    if (dragonchicken.checked) {
        total = total +
            300 * Number(dragonquantity.value);
    }
    starterresult.innerHTML =
        "Starter Total: ₹" + total;
    localStorage.setItem("starterTotal", total.toString());
}
