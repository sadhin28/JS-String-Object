const college ={
    name:'Govt Gouranadi College',
    class:['11','12'],
    events:[
        'Science Fair',
        'bijoy dibos',
        '21 feb'
    ],
    unique:{
        color:'blue',
        result:{
            gpa:5,
            merit:'top'
        }

    }
}
// console.log(college.unique.color)
college.unique.result.gpa=6
college.unique.result.merit='low'
console.log(college.unique.result.gpa)
console.log(college.unique.result.merit)
college.events[1]='16 December'
console.log(college.events[1]);
delete college.class;
//delate property from an object
delete college.unique
console.log(college)
const myObject = {
    a: 1,
    b: 2,
    c: 3
   };
   
   for (let prop in myObject) {
    console.log(myObject[prop]);
   }
   const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}