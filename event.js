// function button_click(){
//     alert("event working")
// }

// function fun(){
//     alert("hey")
// }

// function fun2(){
//     alert("hello")
// }

// function num(){
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     console.log(num1+num2)

// }

// function num(){
//     let num1 = parseInt(document.getElementById("num1").value);
//     let num2 = parseInt(document.getElementById("num2").value);
//     document.write(num1+num2)

// }



// function mouse(){
//     alert("fine")
// }

// function m(){
//     alert("okay")
// }
let a = 0
let c = document.getElementById("id")
let d = 0
let b = document.getElementById("d")
function add(){
    a=a+500
    d++
    c.innerHTML=a 
    b.innerHTML=d
}

function sub(){
    if(a>0){
        a=a-500
        d--
        
        
    }
    c.innerHTML=a
    b.innerHTML=d
}