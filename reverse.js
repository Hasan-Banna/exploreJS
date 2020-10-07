// function reverseString(str){
//     var reverse = "";
//     for(i = 0; i<str.length; i++) {
//         var char = str[i];
//         reverse = char + reverse;
//     }
//     return reverse;
// }
// var statement = "Hello Alien bhai brother";
// var forAlien = reverseString(statement);
// console.log(forAlien);

var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse().join("");
console.log(reverse)