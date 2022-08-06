//---------------------***module =19-2***---------------------------

// call the function

// function startFan() {
//     console.log('Go to the fan');
//     console.log('On the switch');
//     console.log('Come back');
// }
// startFan();

// //bring something

// function bringSomething(money) {
//     console.log('Bring pizza for me');
//     console.log(money);
// }
// const taka = 1000;
// const givenMoney = bringSomething(taka);



//----------------***Module = 19-3***------------------

// handeling multiple parameters

// function add(num1, num2) {
//     const added = num1 + num2;
//     console.log('The add is:', added);
// }
// add(50, 60);



//---------------***Module = 19-4***-------------------

// function add(num1, num2) {
//     const added = num1 + num2;
//     return added;    //return joto bar e likhi na kno protom ta shudhu kaj korbe
// }
// const total = add(50, 60);
// console.log('The add is:', total);



//----------------***Module = 19-5***-------------------------


// getting average of assignment
// function getAverage(assignment1, assignment2, assignment3) {
//     const sum = assignment1 + assignment2 + assignment3;
//     const average = sum / 3;
//     return average
// }
// const myAverage = getAverage(58, 60, 60);
// console.log('My average is :', myAverage);




//----------------***Module = 19-6***-------------------------

// const phone = {           //here phone is object name
//     price: 10000,
//     color: 'yello',       // price, color, model etc propertise name that means keys
//     model: 'y71',
//     camera: '50pixel'     //1000, yellow, y71 etc values

// }
// console.log(phone);
// console.log(phone.price);
// phone.color = 'golden';     //changing object value rule no =1
// phone['color']='black';     //changing object value rule no =2
// console.log(phone);
// const propertiName = 'price'; //changing object value rule no =3
// phone[propertiName] = 20000;
// console.log(phone);



//----------------***Module = 19-7***-------------------------

// const shoppingCart = {
//     book: 10,
//     pen: 5,
//     glass: 10,
//     keyboard: 1,
//     mouse: 2
// }
// console.log(shoppingCart);
// const penCount = shoppingCart.pen;
// console.log(penCount);
// //alternative system
// const penNumber = shoppingCart['pen'];
// console.log(penNumber);

// const propertise = Object.keys(shoppingCart);
// console.log(propertise);

// const values = Object.values(shoppingCart);
// console.log(values);

// const propertiName = 'mouse';
// const propertiValue = shoppingCart[propertiName];
// console.log(propertiValue);




//----------------***Module = 19-8***-------------------------


// const shoppingCart = {
//     book: 10,
//     pen: 5,
//     glass: 10,
//     keyboard: 1,
//     mouse: 2
// }

// const keys = Object.keys(shoppingCart);
// console.log(keys);

// const values = Object.values(shoppingCart);
// console.log(values);


// for (let i = 0; i < keys.length; i++) {
//     const keyName = keys[i];
//     const valueName = values[i];
//     console.log(keyName);
//     console.log(valueName);
// }
// for (let keyName in shoppingCart) {
//     const value = shoppingCart[keyName];
//     console.log(keyName, value)
// }