// let object = {id:101,name:"devashish",age:23,address:"D-21 , Arera colony",salary:20000,position:"developer",qualification:"b.tech"}

// console.log(object)

// --------------------------------

// to print all keys

// let object = {id:101,name:"devashish",age:23,address:"D-21 , Arera colony",salary:20000,position:"developer",qualification:"b.tech"}

// for (let k in object){
//     console.log(k)
// }


// --------------------------------

// tp print all values

// let object = {id:101,name:"devashish",age:23,address:"D-21 , Arera colony",salary:20000,position:"developer",qualification:"b.tech"}

// for (let k in object){
//     console.log(object[k])
// }

// -------------------------------

// for single keys 
//                               
// var obj = {id:101,name:"devashish",age:23,address:"D-21 Arera colony",salary:20000,position:"developer",qualification:"b.tech"}

// let k = Object.keys(obj) 

// console.log(k)



// -----------------------------------------------


// // NESTED OBJECT


// let emp = {
//     id:1,
//     name:"Devshish",
//     age:23,
//     designation:"Manager",
//     package:"10 lpa",
//     account:{
//         bank_name:"SBI",
//         acc_no:123456789,
//         acc_balance:1200,
//     }
// }


// console.log(emp.account.acc_no)



// // NESTED OBJECT  //array in object


// let emp = {
//     id:1,
//     name:"Devshish",
//     age:23,
//     designation:"Manager",
//     package:"10 lpa",
//     array:[1,2,3],
//     account:{
//         bank_name:"SBI",
//         acc_no:123456789,
//         acc_balance:1200,
//     }
// }



// console.log(emp.array[2])





// NESTED OBJECT  //array in object   // function


// let emp = {
//     id:1,
//     name:"Devshish",
//     age:23,
//     designation:"Manager",
//     package:"10 lpa",
//     array:[1,2,3],
//     function:function(){
//         alert("function calling")
//     },
//     account:{
//         bank_name:"SBI",
//         acc_no:123456789,
//         acc_balance:1200,
//     }
// }


// emp.function()




// -

// let emp = {
//     id:parseInt(prompt("enter id no.")),
//     name:prompt("enter your name"),
//     age:parseInt(prompt("enter your age")),
//     designation:"Manager",
//     package:"10 lpa",
//     array:[1,2,3],
//     function:function(){
//         alert("function calling")
//     },
//     account:{
//         bank_name:"SBI",
//         acc_no:123456789,
//         acc_balance:1200,
//     }
// }


// console.log(emp.id)




// -----------------------------------------



// Assign object in object


let ob = {
    name:"devashish",
    age:21
}

let ob1 = {
    location:"here"
}


Object.assign(ob,ob1)
console.log(ob)

delete ob.age
console.log(ob)

ob.designation = "manager"
console.log(ob)