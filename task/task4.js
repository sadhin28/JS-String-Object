//Count the number of properties.



let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
}
//using object.key


let propertyCount = Object.keys(student).length;
console.log(propertyCount)

//using for in

// let count = 0;
// for (let key in student) {
//     if (student.hasOwnProperty(key)) {
//         count++;
//     }
// }
