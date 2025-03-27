const school = 'Govt Gourandi Pilot High School';
console.log(school);
console.log(school.toLowerCase());
const subject ="=' Chemistry";
const book ="=' chemistry";

if(subject.toLowerCase() === book.toLowerCase()){
    console.log("Ekta prem hobe candu");
}else{
    console.log("A jubone r prem hobe na candu")
}

//string white space problem solved by trim
const drink = ' water';
const liquid = 'water ';

if(drink.trim() === liquid.trim()){
    console.log("Panir opor nam jibon");
}else{
    console.log("Sagore pani ache khaite pari na")
}