var marks = [45, 56, 33, 89, 78, 98, 87,];
var max = marks[0];
for(var i = 0; i <marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Highest value is:", max);