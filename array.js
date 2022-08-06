var numbers = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(numbers.length);

console.log(typeof numbers);

console.log(numbers[4]);

numbers[1] = 25;
console.log(numbers);

numbers.push(90);
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);


var budget1 = 80000;
var budget2 = 60000;
var budget3 = 40000;
var budget4 = 20000;

if (budget1 > 80000) {
    console.log('I will buy Mac');
}
else if (budget2 > 60000) {
    console.log('I will buy gaming Laptop');
}
else if (budget3 > 40000) {
    console.log('I will buy a second hand Laptop');
}
else if (budget4 > 20000) {
    console.log('I will buy levono Laptop');
}
else {
    console.log('Mobile phone is better than Laptop');
}
