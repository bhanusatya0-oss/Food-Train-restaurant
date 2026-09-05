interface BillDetails {

    calculateDiscount(subtotal: number): number;

}


abstract class Restaurant {

    public restaurantName: string = "";

    abstract calculateBill(): number;

}


class FinalBill extends Restaurant implements BillDetails {

    private subtotal: number;

    private discount: number = 0;

    private gst: number = 18;


    constructor(name: string, subtotal: number) {

        super();

        this.restaurantName = name;

        this.subtotal = subtotal;

    }


    calculateDiscount(subtotal: number): number {

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


    calculateBill(): number {

        this.discount =
            this.calculateDiscount(this.subtotal);

        let afterDiscount: number =
            this.subtotal - this.discount;

        let gstAmount: number =
            afterDiscount * this.gst / 100;

        return afterDiscount + gstAmount;

    }

}


let mainCourseTotal: number =
    Number(localStorage.getItem("mainCourseTotal"));

let starterTotal: number =
    Number(localStorage.getItem("starterTotal"));

let beverageTotal: number =
    Number(localStorage.getItem("beverageTotal"));

let icecreamTotal: number =
    Number(localStorage.getItem("icecreamTotal"));


let total: number =
    mainCourseTotal +
    starterTotal +
    beverageTotal +
    icecreamTotal;


let bill1 =
    new FinalBill("FoodTrain", total);


let finalBill: number =
    bill1.calculateBill();


let discountAmount: number =
    bill1.calculateDiscount(total);


let afterDiscount: number =
    total - discountAmount;


let gstAmount: number =
    afterDiscount * 18 / 100;


let maincoursebill =
    document.getElementById("maincoursebill") as HTMLElement;

let starterbill =
    document.getElementById("starterbill") as HTMLElement;

let beveragebill =
    document.getElementById("beveragebill") as HTMLElement;

let icecreambill =
    document.getElementById("icecreambill") as HTMLElement;

let subtotal =
    document.getElementById("subtotal") as HTMLElement;

let discount =
    document.getElementById("discount") as HTMLElement;

let afterdiscount =
    document.getElementById("afterdiscount") as HTMLElement;

let gst =
    document.getElementById("gst") as HTMLElement;

let finalbill =
    document.getElementById("finalbill") as HTMLElement;


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