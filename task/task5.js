//Loop through an object and print the key-value pairs with their types



let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
for (let key in myObject){
    console.log(
        `key:${key} | type: ${typeof myObject[key]}`
    );
}