"use strict";
class Restaurant {
    restaurantName = "";
}
class FinalBill extends Restaurant {
    subtotal;
    discount = 0;
    gst = 18;
    constructor(name, subtotal) {
        super();
        this.restaurantName = name;
        this.subtotal = subtotal;
    }
    calculateDiscount(subtotal) {
        if (subtotal > 10000) {
            return subtotal * 40 / 100;
        }
        else if (subtotal > 5000) {
            return subtotal * 25 / 100;
        }
        else if (subtotal > 3000) {
            return subtotal * 15 / 100;
        }
        return 0;
    }
    calculateBill() {
        this.discount =
            this.calculateDiscount(this.subtotal);
        let afterDiscount = this.subtotal - this.discount;
        let gstAmount = afterDiscount * this.gst / 100;
        return afterDiscount + gstAmount;
    }
}
let mainCourseTotal = Number(localStorage.getItem("mainCourseTotal"));
let starterTotal = Number(localStorage.getItem("starterTotal"));
let beverageTotal = Number(localStorage.getItem("beverageTotal"));
let icecreamTotal = Number(localStorage.getItem("icecreamTotal"));
let total = mainCourseTotal +
    starterTotal +
    beverageTotal +
    icecreamTotal;
let bill1 = new FinalBill("FoodTrain", total);
let finalBill = bill1.calculateBill();
let discountAmount = bill1.calculateDiscount(total);
let afterDiscount = total - discountAmount;
let gstAmount = afterDiscount * 18 / 100;
let maincoursebill = document.getElementById("maincoursebill");
let starterbill = document.getElementById("starterbill");
let beveragebill = document.getElementById("beveragebill");
let icecreambill = document.getElementById("icecreambill");
let subtotal = document.getElementById("subtotal");
let discount = document.getElementById("discount");
let afterdiscount = document.getElementById("afterdiscount");
let gst = document.getElementById("gst");
let finalbill = document.getElementById("finalbill");
maincoursebill.innerHTML =
    "Main Course: ₹" + mainCourseTotal;
starterbill.innerHTML =
    "Starters: ₹" + starterTotal;
beveragebill.innerHTML =
    "Beverages: ₹" + beverageTotal;
icecreambill.innerHTML =
    "Ice Creams: ₹" + icecreamTotal;
subtotal.innerHTML =
    "Subtotal: ₹" + total;
discount.innerHTML =
    "Discount: ₹" + discountAmount;
afterdiscount.innerHTML =
    "After Discount: ₹" + afterDiscount;
gst.innerHTML =
    "GST (18%): ₹" + gstAmount;
finalbill.innerHTML =
    "Final Bill: ₹" + finalBill;
