"use strict";
let chickenbiryani = document.getElementById("chickenbiryani");
let chickenquantity = document.getElementById("chickenquantity");
let kajupanner = document.getElementById("kajupanner");
let kajupannerquantity = document.getElementById("kajupannerquantity");
let eggmasala = document.getElementById("eggmasala");
let eggquantity = document.getElementById("eggquantity");
let maincourseresult = document.getElementById("maincourseresult");
function calculateMainCourse() {
    let total = 0;
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
    localStorage.setItem("mainCourseTotal", total.toString());
}
