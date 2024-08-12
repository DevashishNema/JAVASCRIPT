let x = Math.sqrt(9)

 x = Math.sign(5)

 x= Math.pow(4,3)

 x = Math.abs(-45)

 x = Math.round(6.4) 
 x = Math.round(6.5)

 x = Math.ceil(6.1)
 x = Math.ceil(-6.9)

 x = Math.floor(6.9)

 x = Math.min(2,5,3,8,6,9)

 x = Math.max(2,5,3,4,8,6,9)
 
 x = Math.trunc(4.568)

 x = Math.random()
 x = Math.random() * 10 
 x = Math.floor( Math.random() * 10)


 function randomnum(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
 }

  x = randomnum(30,120)





console.log(x)

document.getElementById("demo").innerHTML = x

