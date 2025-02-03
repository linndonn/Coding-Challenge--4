// Task 1 - If Statements

let purchaseAmount = 120;
// Declare a variable purchaseAmount with a value
let finalAmount = purchaseAmount;
// Declare a variable finalAmount and assign it the value of purchaseAmount

if (purchaseAmount > 100) { finalAmount = purchaseAmount * 0.85; }
//Use an if statement to apply a discount if the amount is greater than 100.
//If the amount is greater than 100, assign a 15% discount to the value of finalAmount

console.log(`Final amount after discount: $${finalAmount}`);

    //Task 2 - For Loop
    let sales = [ 100, 230, 55, 75, 120 ];
    //Declare an array sales with the values
    let totalSales = 0;
    //Declare a variable totalSales and assign it the value of 0

    for (let i = 0; i < sales.length; i++) { totalSales += sales[i];
    }
    //Use a for loop to calculate the total sales

    console.log(`Total sales: $${totalSales}`);
    //Log the total sales to the console using a template literal

    