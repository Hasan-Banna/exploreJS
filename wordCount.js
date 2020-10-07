// var speach = "I am a Good person. I don't snore at night";
// var count = 0;
// for (var i = 0; i<speach.length; i++) {
//     var char = speach[i];
//     if(char == " " ){
//         count++
//     }
// }
// count++;
// console.log(count);

var sentence = "I am hardworking. I am serious. I am sure I will do it";
var count = 0;
for(var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    if(letter == "I"){
        count++;
    }
}
console.log(count)