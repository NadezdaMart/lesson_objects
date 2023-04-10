// const car = {
//     model: 'tesla',
//     adress: {
//         country: {
//             city: {
//                 name: 'Boston',
//                 street: {
//                     name: 'pushkina',
//                     number: 2
//                 }
//             }
//         },
//         region: ['Iowa','Texas','California']
//     },
//     specs: {
//         price: {
//             low: 2000,
//             mid: 3000,
//             high: 5000
//         },
//         engine: {
//             power: 400,
//             lowPower: 100
//         }
//     }
// };
// 1. Название города в котором находится авто
// const {adress: {
//     country: {
//         city: {
//             name
//         }
//     }
// }} = car;

// console.log(name);

// 3. Поле high, объекта price

// const {specs: {price: {high}}} = car;
// console.log(high);

// 2. Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona'

// const {adress: {region: [, , , smth = 'Arizona']}} = car;
// console.log(smth);

// 4. Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида:

// { city: 12, mix: 10, country: 8 }


// const {specs: {fuelConsumption = {city: 12, mix: 10, country: 8}}} = car;

// console.log(fuelConsumption);

// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и только числовые) значения на 2 и перезапишет каждое свойство объекта (числового типа).

const student = {
    math: 5, 
    biology: 3, 
    language: 2, 
    isOboltus: true };

// for (let key in student) {
// if (typeof student[key] === 'number'){
// student[key] *=2;
// console.log(student[key]);
// }
// }

// console.log(student);

// Напишите программу, которая посчитает среднее арифметическое всех оценок студента. Если средняя оценка (после умножения) будет больше 5, то поле isOboltus должно стать false.

let count = 0;
let sum = 0;

for (let key in student) {
    if (typeof student[key] === 'number') {
        sum += student[key];
        count +=1;
    }
}
const averageMark = sum/count;
console.log(averageMark); 
    
    if (averageMark > 5) {
        student.isOboltus = false;
       }
      
       
  
console.log(student);
    
    
