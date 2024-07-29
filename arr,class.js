let ar = [1,2,3,4,5,6]
var a = parseInt(prompt("enter a value"))
var b = parseInt(prompt("enter b value"))

ar.push(a,b)
document.write(ar)

var c = parseInt(prompt("enter c value"))
var d = parseInt(prompt("enter d value"))
ar.unshift(c,d)
document.write(ar)
