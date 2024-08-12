function savadata(){
    let n = document.getElementById("Name").value;
    let a = document.getElementById("Age").value;
    let c = document.getElementById("Contact").value;
    let e = document.getElementById("Email").value;
    let p = document.getElementById("Pass").value;
    let c_p = document.getElementById("C_Pass").value;

    // if(n==""){
    //     alert('please fill name hold')
    //     document.getElementById("Name").focus()
    //     return false
    // }

    // if(a==""){
    //     alert('please fill age hold')
    //     document.getElementById("Age").focus()
    //     return false
    // }

    // if(c==""){
    //     alert('please fill contact hold')
    //     document.getElementById("Contact").focus()
    //     return false
    // }

    // if(e==""){
    //     alert('please fill email hold')
    //     document.getElementById("Email").focus()
    //     return false
    // }

    // if(p==""){
    //     alert('please fill pass hold')
    //     document.getElementById("Pass").focus()
    //     return false
    // }

    // if(c_p==""){
    //     alert('please fill c_pass hold')
    //     document.getElementById("C_Pass").focus()
    //     return false
    // }
   
    





   //   if((a>='a'&&a<='z')||(a>='A'&&a<='Z')){
   //      alert("enter age in numbers")
   //      document.getElementById("Age").focus
   //      return false
   //   }





     

      if(n==""){
          alert("Please fill name field")
          document.getElementById('Name').focus()
          return false;
      }


      else if(c==""){
          alert("Please fill contact field")
          document.getElementById('Contact').focus()
          return false;
      }
      
      else if(a==""){
          alert("Please fill age field")
          document.getElementById('Age').focus()
          return false;
      }


      else if(isNaN(a)){ // isNan is a function used to show that not a number  
          alert("Only digits allowed")
          
          
          return false;
      }


      else if(!(e.includes('@'))){ 
          alert("Wrong email type")
          return false
  
      }


      else if(!(p.match([/@!?/]))){
          alert("Wrong password type")
          return false
      }


      else if(c.length<10 || c.length>10){
          alert("Only 10 digits allowed")
          return false;
      }
  
      else if(isNaN(c)){ // isNan is a function used to show that not a number  
          alert("Only digits allowed")
          document.getElementById('Age').focus()
          
          return false;
         }


      else if(e==""){
          alert("Please fill email field")
          document.getElementById('Email').focus()
          return false;
      }
      
      else if(p==""){
          alert("Please fill password field")
          document.getElementById('Password').focus()
          return false;
      }
      
      else if(c_p==""){
          alert("Please fill confirm field")
          document.getElementById('c_p').focus()
          return false;
      }
      
  

    
    
      
}    