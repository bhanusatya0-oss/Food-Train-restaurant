let chocolate =
    document.getElementById("chocolate") as HTMLInputElement;

let chocolatequantity =
    document.getElementById("chocolatequantity") as HTMLSelectElement;


let blueberry =
    document.getElementById("blueberry") as HTMLInputElement;

let blueberryquantity =
    document.getElementById("blueberryquantity") as HTMLSelectElement;


let butterscotch =
    document.getElementById("butterscotch") as HTMLInputElement;

let butterscotchquantity =
    document.getElementById("butterscotchquantity") as HTMLSelectElement;


let icecreamresult =
    document.getElementById("icecreamresult") as HTMLElement;


function calculateIcecream(): void {

    let total: number = 0;

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

    localStorage.setItem(
        "icecreamTotal",
        total.toString()
    );
}