function button_click(){
    alert("event working")
}

function fun(){
    alert("hey")
}

function fun2(){
    alert("hello")
}

// function num(){
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     console.log(num1+num2)

// }

function num(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.write(num1+num2)

}