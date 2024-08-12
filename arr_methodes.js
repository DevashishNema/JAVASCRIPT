const a1 = ["BMW","Audi", "Ford","Maruti","Nexon"]

console.log(a1);

a1.sort()
console.log(a1);

a1.reverse()
console.log(a1);

const num = [40,200,50,80,60,400]
num.sort()
console.log(num);

num.sort(function(a,b){return a-b})
console.log(num);

num.sort(function(a,b){return b-a})
console.log(num);

document.getElementById("demo").innerHTML = a1