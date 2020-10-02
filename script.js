 let page1 = document.getElementsByClassName("brief");
 let button1= document.getElementsByClassName("blue");
 let page2 =document.getElementsByClassName("deploy");
 let button2 = document.querySelector(".finish");
 let page3 = document.getElementsByClassName("page3")
 let displayName= document.querySelector(".block2");
 let displayAge= document.querySelector(".block3");
 let displayDays= document.querySelector(".block4");


 let myName = document.querySelector('#myName');
 let myAge = document.querySelector('#myAge');

 console.log(myName,myAge);


 //function SubmitInfo (){
    
   
 //}

    
     button2.addEventListener("click", function(e){
         e.preventDefault();

         console.log('it works');


                
       
        
        // var ageInDays = myAge*365;
     
         if(myName.value == "" || myAge.value =="") {
             alert("Input Age Is Invalid");
         }else{
            displayName.textContent += myName.value;
            displayAge.textContent += myAge.value;
            displayDays.textContent += myAge.value * 365;
         }
         
         



        
     });
