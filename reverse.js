const sentence = 'I am learning web dev.'

//1st way solving
let reverse = ''
for(const letter of sentence){
    reverse= letter + reverse;
}
console.log(reverse)


//2nd way solving
let riv = ''
for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    riv = letter + riv;
}
console.log(riv);

//3rd way solving
const reversed=sentence.split('').reverse().join('');
console.log(reversed)