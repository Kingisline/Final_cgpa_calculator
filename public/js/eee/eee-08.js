
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

// div 2
function optional2(elem){
    if(elem.value == "pass"){
        document.getElementById("optional2").style.display = "block";
    }else if(elem.value == "arrear"){
        const sum = document.getElementById("arrear2");
        sum.innerHTML = 0;
        document.getElementById("optional2").style.display = "none";
     } 
    else{
        document.getElementById("optional2").style.display = "none";
    }
}

// div 3
function optional3(elem){
    if(elem.value == "pass"){
        document.getElementById("optional3").style.display = "block";
    }else if(elem.value == "arrear"){
        const sum = document.getElementById("arrear3");
        sum.innerHTML = 0;
        document.getElementById("optional3").style.display = "none";
     }
     else{
        document.getElementById("optional3").style.display = "none";
    }
}
// div 4

function optional4(elem){
    if(elem.value == "pass"){
        document.getElementById("optional4").style.display = "block";
    }else if(elem.value == "arrear"){
        const sum = document.getElementById("arrear4");
        sum.innerHTML = 0;
        document.getElementById("optional4").style.display = "none";
     }
     else{
        document.getElementById("optional4").style.display = "none";
    }
}
// div 5

function optional5(elem){
    if(elem.value == "pass"){
        document.getElementById("optional5").style.display = "block";
    }else if(elem.value == "arrear"){
        const sum = document.getElementById("arrear5");
        sum.innerHTML = 0;
        document.getElementById("optional5").style.display = "none";
     } 
    else{
        document.getElementById("optional5").style.display = "none";
    }
}

// div 6

function optional6(elem){
    if(elem.value == "pass"){
        document.getElementById("optional6").style.display = "block";
    }else if(elem.value == "arrear"){
        const sum = document.getElementById("arrear6");
        sum.innerHTML = 0;
        document.getElementById("optional6").style.display = "none";
     } 
    else{
        document.getElementById("optional6").style.display = "none";
    }
}

// div 7

function optional7(elem){
    if(elem.value == "pass"){
        document.getElementById("optional7").style.display = "block";
    }else if(elem.value == "arrear"){
        const sum = document.getElementById("arrear7");
        sum.innerHTML = 0;
        document.getElementById("optional7").style.display = "none";
     } 
    else{
        document.getElementById("optional7").style.display = "none";
    }
}

// div 8

function optional8(elem){
    if(elem.value == "pass"){
        document.getElementById("optional8").style.display = "block";
    }else if(elem.value == "arrear"){
        const sum = document.getElementById("arrear8");
        sum.innerHTML = 0;
        document.getElementById("optional8").style.display = "none";
     } 
    else{
        document.getElementById("optional8").style.display = "none";
    }
}

// div 9

function optional9(elem){
    if(elem.value == "pass"){
        document.getElementById("optional9").style.display = "block";
    }else if(elem.value == "arrear"){
        const sum = document.getElementById("arrear9");
        sum.innerHTML = 0;
        document.getElementById("optional9").style.display = "none";
     } 
    else{
        document.getElementById("optional9").style.display = "none";
    }
}
// div 10

function optional10(elem){
    if(elem.value == "pass"){
        document.getElementById("optional10").style.display = "block";
    }else if(elem.value == "arrear"){
        const sum = document.getElementById("arrear10");
        sum.innerHTML = 0;
        document.getElementById("optional10").style.display = "none";
     } 
    else{
        document.getElementById("optional10").style.display = "none";
    }
}



// div 1 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide = document.getElementById("optional");
    
    if (performance.navigation.type === 1) {
        
        divToHide.style.display = "none";
    }
});

// div 2 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide2 = document.getElementById("optional2");
    
    if (performance.navigation.type === 1) {
        
        // divToHide2.style.display = "none";
    }
});
// div 3 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide3 = document.getElementById("optional3");
    
    if (performance.navigation.type === 1) {
        
        // divToHide3.style.display = "none";
    }
});

// div 4 pass choose handler

document.addEventListener("DOMContentLoaded", function() {

    var divToHide4 = document.getElementById("optional4");
    
    if (performance.navigation.type === 1) {
        
        // divToHide4.style.display = "none";
    }
});
// div 5 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide5 = document.getElementById("optional5");
    
    if (performance.navigation.type === 1) {
        
        // divToHide5.style.display = "none";
    }
});

// div 6 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide6 = document.getElementById("optional6");
    
    if (performance.navigation.type === 1) {
        
        // divToHide6.style.display = "none";
    }
});

// div 7 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide7 = document.getElementById("optional7");
    
    if (performance.navigation.type === 1) {
        
        // divToHide7.style.display = "none";
    }
});

// div 8 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide8 = document.getElementById("optional8");
    
    if (performance.navigation.type === 1) {
        
        // divToHide8.style.display = "none";
    }
});

// div 9 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide9 = document.getElementById("optional9");
    
    if (performance.navigation.type === 1) {
        
        // divToHide9.style.display = "none";
    }
});

// div 10 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide10 = document.getElementById("optional10");
    
    if (performance.navigation.type === 1) {
        
        // divToHide10.style.display = "none";
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
// div 2 optional
function onlyOne2(checkbox) {
    var checkboxes = document.getElementsByName('2')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

}; 

// div 3

function onlyOne3(checkbox) {
    var checkboxes = document.getElementsByName('3')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

}; 
// div 4
function onlyOne4(checkbox) {
    var checkboxes = document.getElementsByName('4')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

};
// div 5 
function onlyOne5(checkbox) {
    var checkboxes = document.getElementsByName('5')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

};

// div 6 
function onlyOne6(checkbox) {
    var checkboxes = document.getElementsByName('6')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

};

// div 7 
function onlyOne7(checkbox) {
    var checkboxes = document.getElementsByName('7')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

};

// div 8 
function onlyOne8(checkbox) {
    var checkboxes = document.getElementsByName('8')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

};

// div 9 
function onlyOne9(checkbox) {
    var checkboxes = document.getElementsByName('9')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

};

// div 10

function onlyOne10(checkbox) {
    var checkboxes = document.getElementsByName('10')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

};


// getting the value from user input by their id
// const lab = document.getElementById("lab");
// check the checkbox using the event listener funtion and print the result

// to add all the data in the function of all 9 div 
// creating a functio with parameter button cliked

// for Project Work / Internship is 10
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
            
    
    
    // function to change NAN value to 0
            function changeNaN(value, replacement) {
                if (isNaN(value)) {
                  return replacement;
                }else {
                  return value;
                }
            }
              
            //   const inputs = [re1,re2,re3,re4,re5,re6,re7,re8,re9];

              const inputs = [r1]
              
            //   console.log(inputs)
              for (let i = 0; i < inputs.length; i++) {
                const result = changeNaN(inputs[i], 0);
                // console.log(result);
            }
            // inputs.forEach(function(element){
            //  const ele =  console.log(element);
            // //  console.log(ele);
            // })  
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
                            sum.innerHTML = "Arrear!!"
                        }
                        //  if the value is less than 5
                        else if(divide<valu){
                            sum.style.color = "red";
                            sum.innerHTML =  divide +"       "+" ! You have arrear";
                        }
                        else if(divide>valu && (result_1 === 0)){
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