// document.getElementById("head").innerHTML="hello js"
// document.getElementById("head").style.backgroundColor="pink"
// document.getElementById("head").style.textAlign="center"

let a = document.getElementById("head")

a.style.color="tomato"
a.style.backgroundColor="purple"
a.innerHTML="why js"

// let b = document.getElementsByTagName("li")
// b[0].style.backgroundColor="black"

// let b = document.getElementsByTagName("li")
// for (let i=0 ; i<10 ; i++){
//     if(i%2!=0){
//         b[i].style.backgroundColor="grey"
//     }
// }



let b = document.getElementsByTagName("li")
b[0].style.cssText = "background-color:red ; color:white"
b[2].innerHTML="<h1> ORACLE </h1>"// innerHTML can change text as well as can change element .
b[3].innerText="YES"  // innerText can only change text.

let image =document.getElementById("img")
// image.src=""
    

