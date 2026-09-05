let chickenbiryani =
    document.getElementById("chickenbiryani") as HTMLInputElement;

let chickenquantity =
    document.getElementById("chickenquantity") as HTMLSelectElement;


let kajupanner =
    document.getElementById("kajupanner") as HTMLInputElement;

let kajupannerquantity =
    document.getElementById("kajupannerquantity") as HTMLSelectElement;


let eggmasala =
    document.getElementById("eggmasala") as HTMLInputElement;

let eggquantity =
    document.getElementById("eggquantity") as HTMLSelectElement;


let maincourseresult =
    document.getElementById("maincourseresult") as HTMLElement;


function calculateMainCourse(): void {

    let total: number = 0;

    if (chickenbiryani.checked) {

        total = total +
            250 * Number(chickenquantity.value);

    }

    if (kajupanner.checked) {

        total = total +
            300 * Number(kajupannerquantity.value);

    }

    if (eggmasala.checked) {

        total = total +
            200 * Number(eggquantity.value);

    }

    maincourseresult.innerHTML =
        "Main Course Total: ₹" + total;

    localStorage.setItem(
        "mainCourseTotal",
        total.toString()
    );
}