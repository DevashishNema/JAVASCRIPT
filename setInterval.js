// setInterval(()=>{document.write(1)},1000)

// let i=1
// setInterval(()=>{document.write(i++)},1000)

// let a = setInterval(()=>{
//     if(i==10){
//         clearInterval(a)
//     }
//     document.write(i++)

// },1000)


// -----------------------------------
// setTimeout

// setTimeout(()=>{alert("this working")},2000)
// -----------------------------------


// --------------------------
// DATE

// let date = new Date()
// console.log(date)

// console.log(date.toTimeString())

// console.log(date.toLocaleDateString())

// console.log(date.toLocaleTimeString())

// console.log(date.toLocaleString())


// digital clock
setInterval(()=>{
    let date = new Date()
    let time = date.toLocaleTimeString()
    let d_c = document.getElementById("d_c")
    d_c.innerHTML = time
},1000)

