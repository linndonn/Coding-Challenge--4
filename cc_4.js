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

  // Task 3 - While Loop
  
  let stock = 10;
    //Declare a variable stock with an initial value of 10
    while (stock >0) { stock--;
    console.log(`Stock left: ${stock}`);
    }
    //Use a while loop to decrease the stock left in the inventory

    // Task 4 - Do... While Loop
let responses = 0; 
//Declare a variable responses with an initial value of 0
do { responses++;
    console.log(`Response Collected ${responses}`); } while (responses < 3);
    //Use a do...while loop to collect responses, simulating user input with responses++ until it reaches 3

// Task 5 - For ... In Loop
let employee = { name: "Alice", position: "Manager", salary: 75000 };
//Declare an object employee with properties name, position, and salary
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}
