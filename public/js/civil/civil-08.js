
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


       const add1 =parseInt(r1 + arrear1);

    

    const arr1 = parseInt(arrear1)
    // console.log(arr1);

    const re1 = parseInt(r1);
    // console.log(re1);

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
            // const add1 = parseInt(inputs[0]); 

            // console.log(add1);
            // console.log(add2);
            // console.log(add3);
            // console.log(add4);
            // console.log(add5);
            // console.log(add6);
            // console.log(add7);
            // console.log(add8);

            const adding = parseInt(add1);

            const di  = parseInt(adding);
            const divide = adding/10;  // credit points for 10
            // console.log(divide);

            const div = parseFloat(divide);
            const sum = document.getElementById("sum")

            if(isNaN(divide)){
                sum.style.color = "red"
                sum.innerHTML = "! Sorry you must have cleared all subjects";
            }else{
                sum.style.color = "#45f3ff"
                sum.innerHTML = divide + "&#127881;";
            }

        });



        $('#select1').select2({
            theme: 'classic' 
          });