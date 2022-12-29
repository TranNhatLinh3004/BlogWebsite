//Help me writing a sum function?
let inputValuePrice = document.getElementById("myInput2").value;
let outputSumme = document.getElementById("summe");

outputSumme = parseFloat(inputValuePrice);
let sum = [];
sum.push(outputSumme);
console.log(getSumOfArray(sum));

function getSumOfArray(array) {
    let sumOfElements = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfElements = sumOfElements + array[i];
    }
    return sumOfElements;
}