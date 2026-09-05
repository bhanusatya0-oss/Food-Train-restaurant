let coke =
    document.getElementById("coke") as HTMLInputElement;

let cokequantity =
    document.getElementById("cokequantity") as HTMLSelectElement;


let pepsi =
    document.getElementById("pepsi") as HTMLInputElement;

let pepsiquantity =
    document.getElementById("pepsiquantity") as HTMLSelectElement;


let freshlime =
    document.getElementById("freshlime") as HTMLInputElement;

let freshlimequantity =
    document.getElementById("freshlimequantity") as HTMLSelectElement;


let beverageresult =
    document.getElementById("beverageresult") as HTMLElement;


function calculateBeverage(): void {

    let total: number = 0;

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

    localStorage.setItem(
        "beverageTotal",
        total.toString()
    );
}