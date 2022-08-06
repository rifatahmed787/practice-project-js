
/**
 * Milestone =4 ,
 *  module =20
 */

//------------------- *****convert inches to feet start*****---------------------------

// function fromInches(inches) {
//     const myFeet = inches / 12;
//     return myFeet;
// }
// const myInches = 70;
// const getFeet = fromInches(myInches);
// console.log('70 inche equal to', getFeet, 'feet');

//------------------convert inches to feet end --------------------------------


//-------------------******checking even or odd start *****-----------------------------

//type one-----------------

// function isEvenOrOdd(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const isEven = 50;
// const numbers = isEvenOrOdd(isEven);
// console.log('This is an even number :', numbers);


//type two--------------------

// function isEven(number) {
//     const reminder = number % 2;
//     if (reminder == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const myNumber = isEven(50);
// console.log('This number is an even: ', myNumber);

// -------------------checking even or odd end ------------------------------


//-------------------***finding leap year start ****-------------------------------

// function isLeapYear(year) {
//     if (year % 4 == 0) {
//         return true;
//     }
//     else if (year % 100 == 0) {
//         return true;
//     }
//     else if (year % 400 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const myYear = isLeapYear(2022);
// console.log('This is a leap year:', myYear);


//-------------------finding leap year end --------------------------------



//------------------***sum of all numbers of an array star***------------------

// function getSumOfArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }
// const myNumbers = [12, 13, 14, 15, 16, 17, 18, 19];
// const getArray = getSumOfArray(myNumbers);
// // console.log('The sum of array is :', getArray);


//------------------***sum of all numbers of an array end***------------------



//----------------***sum of all odd numbers of an array start***---------------

// function getSumOfArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         // console.log(index, element, sum);
//         sum = sum + element;
//     }
//     return sum;
// }

// function getSumOfOddArray(numbers) {
//     const oddNumber = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];

//         if (element % 2 !== 0) {
//             console.log(index, element);
//             oddNumber.push(element);
//         }
//     }
//     return oddNumber;
// }
// const myNumbers = [12, 13, 14, 15, 16, 17, 18, 19];
// const oddNumber = getSumOfOddArray(myNumbers);
// console.log(oddNumber);
// const getArray = getSumOfArray(oddNumber);
// console.log('The sum of odd array is :', getArray);


//----------------***sum of all odd numbers of an array end***---------------



//----------------***calculate of a factorial using loop start***----------------


// function getMultiplication(number) {
//     let mul = 1;
//     for (let i = 1; i <= number; i++) {
//         mul = mul * i;
//         console.log(mul);
//     }
//     return mul;
// }
// getMultiplication(5);

// --------------------now finding out factorial of 3 (3! = 3*2*1)----------------

// function getFactorial(number) {
//     let factorial = 1;
//     for (let i = number; i > 1; i--) {
//         factorial = factorial * i;
//         console.log(factorial);
//     }
//     return factorial;
// }
// getFactorial(3);



// for (let i = 9; i >= 1; i--) {
//     console.log(i);
// }


//----------------***calculate of a factorial using loop end***----------------