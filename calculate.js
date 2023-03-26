console.log('Hello everyone I am creating a calculator using Inquirer prompt');
import inquirer from "inquirer";
// Getting Value 1 
let num1 = await inquirer.prompt({
    name: 'value1',
    type: 'number',
    message: 'Enter the First value'
});
// Getting Value 2
let num2 = await inquirer.prompt({
    name: 'value2',
    type: 'number',
    message: 'Enter the Second value'
});
// Getting  Operators
let operator = await inquirer.prompt({
    name: 'ope',
    type: 'string',
    message: 'Operator'
});
// in case of Addition of two number it will concat by default . Because by default input value type is string
// So we need to convert to type Number 
//  converting string to number 
let v1 = Number(num1.value1);
let v2 = Number(num2.value2);
// Conditions
if (operator.ope == '+') {
    console.log('value1 + value2 = ', v1 + v2); //   Addition output
}
else if (operator.ope == '-') {
    console.log('value1 - value2 = ', v1 - v2); //    Subtraction output
}
else if (operator.ope == '*') {
    console.log(' value1 x value2 = ', v1 * v2); //    Multiplication  optput
}
else if (operator.ope == '/') {
    console.log('value1 / value2 =', v1 / v2); //    Division output
}
else {
    console.log('Invalid Input'); // Invalid output
}
