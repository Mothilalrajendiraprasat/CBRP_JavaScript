
var hours = [40, 45,38,37,41 ];

function getsalary(hours) {
  return hours >= 40;
}
console.log(hours.map(getsalary))




var hours = [40, 45,38,37,41];
function getsalary(hours) {
  return hours >= 30;
}
console.log(hours.filter(getsalary))



var hours = [40,38,38,46,45 ];

function gettotal(total,hour) {
  var result= total += hour;
  return result;
}
console.log((hours.reduce(gettotal)))

 let sum=0;
const nums = [30,70,55,100,43,4,12];
let a = function iterate(element) {
  sum += element;  
}
console.log(nums.forEach(a));

let sum1=0;
const nums = [30,70,55,100,43,4,12];

nums.forEach(function iterate(element) {
    sum1= sum1 += element;
});
console.log(sum1);