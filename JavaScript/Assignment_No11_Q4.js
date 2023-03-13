const Vegetables = ["Cucumber", "Pumpkin", "Tomato"];

//Using Push method
Vegetables.push("Corn", "Green Peas", "String Beans");

//Using Unshift
Vegetables.unshift("Potato", "Onion", "Peppers");
console.log(Vegetables);

//Using Slice Return Arrays
var x = Vegetables.slice(3, 6);
console.log(x);
var y = Vegetables.slice(7, 9);
console.log(y);
var z = Vegetables.slice(3, 5);
z.push("String Beans");
console.log(z);

//Using splice method change original array and return Arrays
Vegetables.splice(1, 0, "Brinjal");
console.log(Vegetables);

Vegetables.splice(4, 1, "Carrot");
console.log(Vegetables);