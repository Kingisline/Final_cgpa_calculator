
// to change the optional checkbox usign DOM

// div 1
function optional(elem){
    if(elem.value == "pass"){
        document.getElementById("optional").style.display = "block";
    }
    else if(elem.value == "arrear"){
        const sum = document.getElementById("arrear1");
        sum.innerHTML = 0;
        document.getElementById("optional").style.display = "none";
     } else{
        document.getElementById("optional").style.display = "none";
    }
}

// div 1 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide = document.getElementById("optional");
    
    if (performance.navigation.type === 1) {
        
        divToHide.style.display = "none";
    }
});


// to select one options in  a group using js
// div 1
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('1')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

};


// getting the value from user input by their id
// const lab = document.getElementById("lab");
// check the checkbox using the event listener funtion and print the result

// to add all the data in the function of all 9 div 
// creating a functio with parameter button cliked

// for Project Work/Internship is 10
function div1() {
const o = document.getElementById("o");
const A = document.getElementById("a+");
const a = document.getElementById("a");
const B = document.getElementById("b+");
const b = document.getElementById("b");
const c = document.getElementById("c");
const resu = document.getElementById("res1");

o.addEventListener('change', function () {

if(o.checked){
    const a = 10;
    const b = 10;
    const result1 = a * b;
    // const mul =`${result1}`;
    resu.innerHTML = result1;
     
}
});

A.addEventListener('change', function () {

    if(A.checked){
        const a = 10;
        const b = 9;
        const result1 = a * b;
        resu.innerHTML = result1;
    }
    });

    
a.addEventListener('change', function () {

        if(a.checked){
            const a = 10;
            const b = 8;
            const result1 = a * b;
            resu.innerHTML = result1;      }
        });

B.addEventListener('change', function () {

            if(B.checked){
                const a = 10;
                const b = 7;
                const result1 = a * b;
                resu.innerHTML = result1;
            }
            });

 b.addEventListener('change', function () {

                if(b.checked){
                    const a = 10;
                    const b = 6;
                    const result1 = a * b;
                    resu.innerHTML = result1;
                }
                });
 c.addEventListener('change', function () {

  if(c.checked){
  const a = 10;
  const b = 5;
  const result1 = a * b;
  resu.innerHTML = result1;
  }
});

 };


 
                                
    // further calcualtions based on the innerhtml values and returning into the fun
    // const re1 = 0;
    const but = document.getElementById("calculate");
    but.addEventListener("click", function(){
        const r1 = document.getElementById("res1").innerHTML;
        console.log(r1);
       const arrear1 = document.getElementById("arrear1").innerHTML;  
       console.log(arrear1)


            // function to change NAN value to 0

            function changeNaN(value, replacement) {
                if (isNaN(value)) {
                  return replacement;
                }else {
                  return value;
                }
            }
              
              const inputs = [r1]
              
              for (let i = 0; i < inputs.length; i++) {
                const result = changeNaN(inputs[i], 0);
                // console.log(result);
            } 

            const add1 = parseInt(inputs[0]); 
    

            const data_result = [add1];

    // Replace NaN with 0 without affecting existing 0 values
            for (let i = 0; i < data_result.length; i++) {
              if (isNaN(data_result[i])) {
                data_result[i] = 0.0;
              }
            }
            
            // console.log(data_result)
            // repace nan with 0 to conform that is there is any chance of arrear
            const result_1 = data_result[0];
                                        
            
            // adding all the inputs from the user and adding all the values
                        const adding = parseInt((result_1));
            
                        // convering the inputs value into Interger in case of 
                        const di  = parseInt(adding);
                        // divide the value with the score
                        const divide = adding/10;
                        // console.log(di);
                        // console.log(di);
                        // console.log(divide);
            
                        // getting the value form the sum
                        const sum = document.getElementById("sum")
            
            
                        // declare the valu as 5.00
                        const valu = "5.000000000000000"
            
            
                        // by using if statement if the divide is zero
                        if(divide=='0'){
                            sum.style.color = "red";
                            sum.innerHTML = "Enter fields correctly"
                        }
                        //  if the value is less than 5
                        else if(divide<valu){
                            sum.style.color = "red";
                            sum.innerHTML =  divide +"       "+" ! You have arrear";
                        }
                        else if(result_1 === 0){
                            sum.style.color = "red";
                            sum.innerHTML =  divide +"       "+" ! You have arrear";
                        }
                        else{
                            sum.style.color = "#45f3ff"
                            sum.innerHTML = divide + "&#127881;";
                        }  
                    });
            
            
                    $('#select1').select2({
                        theme: 'classic' 
                      });