let price = prompt("Enter Product Price : ");
let member = prompt("Enter a Membership Type (none, silver, gold, platinum) : ");

if (price === "" || price === null || member === "" || member === null) {
    console.log("Please enter both price and membership type.");
}
else if (isNaN(price) || price <= 0) {
    console.log("Invalid price. Enter a number greater than 0.");
}
else {
    price = Number(price);
    let discount = 0;

    // if-else ladder
    if (member === "platinum") {
        discount = 30;
    } else if (member === "gold") {
        discount = 20;
    } else if (member === "silver") {
        discount = 10;
    } else {
        discount = 0;
    }

    let disAmt = (price * discount) / 100;
    let finalPrice = price - disAmt;

    // switch
    let msg = "";
    switch (member) {
        case "platinum":
            msg = "You are a Platinum Member - got 30% Discount.";
            break;
        case "gold":
            msg = "You are a Gold Member - got 20% Discount.";
            break;
        case "silver":
            msg = "You are a Silver Member - got 10% Discount.";
            break;
        case "none":
            msg = "No membership - Purchase membership for discounts.";
            break;
        default:
            msg = "Invalid membership type.";
    }

    // ternary
    let delivery = (finalPrice >= 500)
        ? "Free Delivery"
        : "Delivery charges apply";

    // Final Output
    console.log("============================================");
    console.log("                BILL RECEIPT                ");
    console.log("============================================");
    console.log(" Price           : ₹" + price);
    console.log(" Discount        : " + discount + "%");
    console.log(" Discount Amount : ₹" + disAmt);
    console.log("--------------------------------------------");
    console.log(" Final Price     : ₹" + finalPrice);
    console.log("--------------------------------------------");
    console.log("             MEMBERSHIP DETAILS             ");
    console.log("============================================");
    console.log(" " + msg);
    console.log(" Delivery Status : " + delivery);
    console.log("============================================");
    console.log("           THANK YOU FOR SHOPPING!          ");
    console.log("============================================");
}
