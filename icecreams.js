"use strict";
let chocolate = document.getElementById("chocolate");
let chocolatequantity = document.getElementById("chocolatequantity");
let blueberry = document.getElementById("blueberry");
let blueberryquantity = document.getElementById("blueberryquantity");
let butterscotch = document.getElementById("butterscotch");
let butterscotchquantity = document.getElementById("butterscotchquantity");
let icecreamresult = document.getElementById("icecreamresult");
function calculateIcecream() {
    let total = 0;
    if (chocolate.checked) {
        total = total +
            100 * Number(chocolatequantity.value);
    }
    if (blueberry.checked) {
        total = total +
            120 * Number(blueberryquantity.value);
    }
    if (butterscotch.checked) {
        total = total +
            150 * Number(butterscotchquantity.value);
    }
    icecreamresult.innerHTML =
        "Ice Cream Total: ₹" + total;
    localStorage.setItem("icecreamTotal", total.toString());
}
