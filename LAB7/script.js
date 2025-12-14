// let colors = ["lightblue", "lightgreen", "lightpink", "khaki"];
// let index = 0;

// function changeColor() {
//     document.body.style.backgroundColor = colors[index];
//     index = (index + 1) % colors.length;
// }

function task1() {
  var name = prompt("Enter your name:");
  var regID = prompt("Enter your Registration ID:");
  alert("Name: " + name + "\nRegistration ID: " + regID);
}

function task2() {
  var num1 = parseFloat(prompt("Enter first number:"));
  var num2 = parseFloat(prompt("Enter second number:"));

  var sum = num1 + num2;
  var diff = num1 - num2;
  var prod = num1 * num2;
  var quot = num1 / num2;
  var comparison = num1 > num2;

  alert(
    "Sum: " + sum +
    "\nDifference: " + diff +
    "\nProduct: " + prod +
    "\nQuotient: " + quot +
    "\nIs First > Second? " + comparison
  );
}