let chickenmajestic =
    document.getElementById("chickenmajestic") as HTMLInputElement;

let chickenmajesticquantity =
    document.getElementById("chickenmajesticquantity") as HTMLSelectElement;


let mushroom =
    document.getElementById("mushroom") as HTMLInputElement;

let mushroomquantity =
    document.getElementById("mushroomquantity") as HTMLSelectElement;


let dragonchicken =
    document.getElementById("dragonchicken") as HTMLInputElement;

let dragonquantity =
    document.getElementById("dragonquantity") as HTMLSelectElement;


let starterresult =
    document.getElementById("starterresult") as HTMLElement;


function calculateStarter(): void {

    let total: number = 0;

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

    localStorage.setItem(
        "starterTotal",
        total.toString()
    );
}