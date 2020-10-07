
var sum = 0;
function getSumArray(numbers){
    for(i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 52, 87, 63, 41, 25];
var result = getSumArray(numbers);
console.log("total numbers: ", result);