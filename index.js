let pay = parseInt(prompt("Enter pay rate "));
let week = parseInt(prompt("Enter hour per week"));

let totatlweek = week * 5;
let total = pay * totatlweek;
let tax = total * 0.14;
let tot_tax = total - tax;

let tot_clot = tot_tax * 0.10;
let tot_school = tot_tax * 0.01;
let temp = (tot_tax - tot_clot - tot_school)* 0.25;
let temp1 = temp * 5;

document.write(`a. Your Income before and taxes ${total.toLocaleString()} and after taxes is ${tot_tax.toLocaleString()}<br>`);
document.write(`b. The money you spend on clothes and other accessories is ${tot_clot.toLocaleString()}<br>`);
document.write(`c. The money you spend on school supplies is ${tot_school.toLocaleString()}<br>`);
document.write(`d. The money you spend to buy saving bond is ${temp.toLocaleString()}<br>`);
document.write(`e. The money your parents spend to buy additional saving bond for you is ${temp1.toLocaleString()}<br>`);