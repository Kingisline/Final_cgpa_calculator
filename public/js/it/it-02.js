
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
        
        divToHide2.style.display = "none";
    }
});
// div 3 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide3 = document.getElementById("optional3");
    
    if (performance.navigation.type === 1) {
        
        divToHide3.style.display = "none";
    }
});

// div 4 pass choose handler

document.addEventListener("DOMContentLoaded", function() {

    var divToHide4 = document.getElementById("optional4");
    
    if (performance.navigation.type === 1) {
        
        divToHide4.style.display = "none";
    }
});
// div 5 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide5 = document.getElementById("optional5");
    
    if (performance.navigation.type === 1) {
        
        divToHide5.style.display = "none";
    }
});

// div 6 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide6 = document.getElementById("optional6");
    
    if (performance.navigation.type === 1) {
        
        divToHide6.style.display = "none";
    }
});

// div 7 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide7 = document.getElementById("optional7");
    
    if (performance.navigation.type === 1) {
        
        divToHide7.style.display = "none";
    }
});

// div 8 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide8 = document.getElementById("optional8");
    
    if (performance.navigation.type === 1) {
        
        divToHide8.style.display = "none";
    }
});

// div 9 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide9 = document.getElementById("optional9");
    
    if (performance.navigation.type === 1) {
        
        divToHide9.style.display = "none";
    }
});

// div 10 pass choose handler
document.addEventListener("DOMContentLoaded", function() {

    var divToHide10 = document.getElementById("optional10");
    
    if (performance.navigation.type === 1) {
        
        divToHide10.style.display = "none";
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

// for professional  english-2 credit is 2
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
    const a = 2;
    const b = 10;
    const result1 = a * b;
    // const mul =`${result1}`;
    resu.innerHTML = result1;
     
}
});

A.addEventListener('change', function () {

    if(A.checked){
        const a = 2;
        const b = 9;
        const result1 = a * b;
        resu.innerHTML = result1;
    }
    });

    
a.addEventListener('change', function () {

        if(a.checked){
            const a = 2;
            const b = 8;
            const result1 = a * b;
            resu.innerHTML = result1;      }
        });

B.addEventListener('change', function () {

            if(B.checked){
                const a = 2;
                const b = 7;
                const result1 = a * b;
                resu.innerHTML = result1;
            }
            });

 b.addEventListener('change', function () {

                if(b.checked){
                    const a = 2;
                    const b = 6;
                    const result1 = a * b;
                    resu.innerHTML = result1;
                }
                });
 c.addEventListener('change', function () {

  if(c.checked){
  const a = 2;
  const b = 5;
  const result1 = a * b;
  resu.innerHTML = result1;
  }
});

 };
                                 
// command for div 2 and the input
// statics and numerical methods 4 credit


function div2() {
const o = document.getElementById("o2");
const A = document.getElementById("a+2");
const a = document.getElementById("a2");
const B = document.getElementById("b+2");
const b = document.getElementById("b2");
const c = document.getElementById("c2");
const res = document.getElementById("res2");

o.addEventListener('change', function() {

if(o.checked){
    const a = 4;
    const b = 10;
    const result2 = a * b;
    res.innerHTML = result2;
}
});

A.addEventListener('change', function () {

if(A.checked){
    const a = 4;
    const b = 9;
    const result2 = a * b;
    res.innerHTML = result2;
}
});

    
a.addEventListener('change', function () {

    if(a.checked){
        const a = 4;
        const b = 8;
        const result2 = a * b;
        res.innerHTML = result2;
}
    });

B.addEventListener('change', function () {

    if(B.checked){
        const a = 4;
        const b = 7;
        const result2 = a * b;
        res.innerHTML = result2;
}
});

 b.addEventListener('change', function () {

    if(b.checked){
        const a = 4;
        const b = 6;
        const result2 = a * b;
        res.innerHTML = result2;
}
});
 c.addEventListener('change', function () {

    if(c.checked){
        const a = 4;
        const b = 5;
        const result2 = a * b;
        res.innerHTML = result2;
}
});
};

// div 3 and input
// credit points for physics for information science 3

function div3() {
    const o = document.getElementById("o3");
    const A = document.getElementById("a+3");
    const a = document.getElementById("a3");
    const B = document.getElementById("b+3");
    const b = document.getElementById("b3");
    const c = document.getElementById("c3");
    const res = document.getElementById("res3");
    
    o.addEventListener('change', function() {
    
    if(o.checked){
        const a = 3;
        const b = 10;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
    A.addEventListener('change', function () {
    
    if(A.checked){
        const a = 3;
        const b = 9;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
        
    a.addEventListener('change', function () {
    
        if(a.checked){
            const a = 3;
            const b = 8;
            const result = a * b;
            res.innerHTML = result;
    }
        });
    
    B.addEventListener('change', function () {
    
        if(B.checked){
            const a = 3;
            const b = 7;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    
     b.addEventListener('change', function () {
    
        if(b.checked){
            const a = 3;
            const b = 6;
            const result = a * b;
            res.innerHTML = result;
    }
    });
     c.addEventListener('change', function () {
    
        if(c.checked){
            const a = 3;
            const b = 5;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    };

// function div 4
// credit point for beee is 3

function div4() {
    const o = document.getElementById("o4");
    const A = document.getElementById("a+4");
    const a = document.getElementById("a4");
    const B = document.getElementById("b+4");
    const b = document.getElementById("b4");
    const c = document.getElementById("c4");
    const res = document.getElementById("res4");
    
    o.addEventListener('change', function() {
    
    if(o.checked){
        const a = 3;
        const b = 10;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
    A.addEventListener('change', function () {
    
    if(A.checked){
        const a = 3;
        const b = 9;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
        
    a.addEventListener('change', function () {
    
        if(a.checked){
            const a = 3;
            const b = 8;
            const result = a * b;
            res.innerHTML = result;
    }
        });
    
    B.addEventListener('change', function () {
    
        if(B.checked){
            const a = 3;
            const b = 7;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    
     b.addEventListener('change', function () {
    
        if(b.checked){
            const a = 3;
            const b = 6;
            const result = a * b;
            res.innerHTML = result;
    }
    });
     c.addEventListener('change', function () {
    
        if(c.checked){
            const a = 3;
            const b = 5;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    };

//  div 5 
// credit points for tamil and technology 1

function div5() {
    const o = document.getElementById("o5");
    const A = document.getElementById("a+5");
    const a = document.getElementById("a5");
    const B = document.getElementById("b+5");
    const b = document.getElementById("b5");
    const c = document.getElementById("c5");
    const res = document.getElementById("res5");
    
    o.addEventListener('change', function() {
    
    if(o.checked){
        const a = 1;
        const b = 10;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
    A.addEventListener('change', function () {
    
    if(A.checked){
        const a = 1;
        const b = 9;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
        
    a.addEventListener('change', function () {
    
        if(a.checked){
            const a = 1;
            const b = 8;
            const result = a * b;
            res.innerHTML = result;
    }
        });
    
    B.addEventListener('change', function () {
    
        if(B.checked){
            const a = 1;
            const b = 7;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    
     b.addEventListener('change', function () {
    
        if(b.checked){
            const a = 1;
            const b = 6;
            const result = a * b;
            res.innerHTML = result;
    }
    });
     c.addEventListener('change', function () {
    
        if(c.checked){
            const a = 1;
            const b = 5;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    };


//  div 6 
// credit points for eG  4

function div6() {
    const o = document.getElementById("o6");
    const A = document.getElementById("a+6");
    const a = document.getElementById("a6");
    const B = document.getElementById("b+6");
    const b = document.getElementById("b6");
    const c = document.getElementById("c6");
    const res = document.getElementById("res6");
    
    o.addEventListener('change', function() {
    
    if(o.checked){
        const a = 4;
        const b = 10;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
    A.addEventListener('change', function () {
    
    if(A.checked){
        const a = 4;
        const b = 9;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
        
    a.addEventListener('change', function () {
    
        if(a.checked){
            const a = 4;
            const b = 8;
            const result = a * b;
            res.innerHTML = result;
    }
        });
    
    B.addEventListener('change', function () {
    
        if(B.checked){
            const a = 4;
            const b = 7;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    
     b.addEventListener('change', function () {
    
        if(b.checked){
            const a = 4;
            const b = 6;
            const result = a * b;
            res.innerHTML = result;
    }
    });
     c.addEventListener('change', function () {
    
        if(c.checked){
            const a = 4;
            const b = 5;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    };

//  div 7
// credit points for labarotory in c 2

function div7() {
    const o = document.getElementById("o7");
    const A = document.getElementById("a+7");
    const a = document.getElementById("a7");
    const B = document.getElementById("b+7");
    const b = document.getElementById("b7");
    const c = document.getElementById("c7");
    const res = document.getElementById("res7");
    
    o.addEventListener('change', function() {
    
    if(o.checked){
        const a = 2;
        const b = 10;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
    A.addEventListener('change', function () {
    
    if(A.checked){
        const a = 2;
        const b = 9;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
        
    a.addEventListener('change', function () {
    
        if(a.checked){
            const a = 2;
            const b = 8;
            const result = a * b;
            res.innerHTML = result;
    }
        });
    
    B.addEventListener('change', function () {
    
        if(B.checked){
            const a = 2;
            const b = 7;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    
     b.addEventListener('change', function () {
    
        if(b.checked){
            const a = 2;
            const b = 6;
            const result = a * b;
            res.innerHTML = result;
    }
    });
     c.addEventListener('change', function () {
    
        if(c.checked){
            const a = 2;
            const b = 5;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    };

//  div 8 
// credit points for epl lab is 2

function div8() {
    const o = document.getElementById("o8");
    const A = document.getElementById("a+8");
    const a = document.getElementById("a8");
    const B = document.getElementById("b+8");
    const b = document.getElementById("b8");
    const c = document.getElementById("c8");
    const res = document.getElementById("res8");
    
    o.addEventListener('change', function() {
    
    if(o.checked){
        const a = 2;
        const b = 10;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
    A.addEventListener('change', function () {
    
    if(A.checked){
        const a = 2;
        const b = 9;
        const result = a * b;
        res.innerHTML = result;
    }
    });
    
        
    a.addEventListener('change', function () {
    
        if(a.checked){
            const a = 2;
            const b = 8;
            const result = a * b;
            res.innerHTML = result;
    }
        });
    
    B.addEventListener('change', function () {
    
        if(B.checked){
            const a = 2;
            const b = 7;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    
     b.addEventListener('change', function () {
    
        if(b.checked){
            const a = 2;
            const b = 6;
            const result = a * b;
            res.innerHTML = result;
    }
    });
     c.addEventListener('change', function () {
    
        if(c.checked){
            const a = 2;
            const b = 5;
            const result = a * b;
            res.innerHTML = result;
    }
    });
    };

//  div 9
// credit points for comminication english lab  2

function div9() {
    const o = document.getElementById("o9");
    const A = document.getElementById("a+9");
    const a = document.getElementById("a9");
    const B = document.getElementById("b+9");
    const b = document.getElementById("b9");
    const c = document.getElementById("c9");
    const res9 = document.getElementById("res9");

    
    o.addEventListener('change', function () {
    
    if(o.checked){
        const a = 2;
        const b = 10;
        const result9 = a * b;
        res9.innerHTML = result9;
    }
    });
    
    A.addEventListener('change', function () {
    
    if(A.checked){
        const a = 2;
        const b = 9;
        const result9 = a * b;
        res9.innerHTML = result9;
    }
    });
    
        
    a.addEventListener('change', function () {
    
        if(a.checked){
            const a = 2;
            const b = 8;
            const result9 = a * b;
            res9.innerHTML = result9;
    }
        });
    
    B.addEventListener('change', function () {
    
        if(B.checked){
            const a = 2;
            const b = 7;
            const result9 = a * b;
            res9.innerHTML = result9;
    }
    });
    
     b.addEventListener('change', function () {
    
        if(b.checked){
            const a = 2;
            const b = 6;
            const result9 = a * b;
            res9.innerHTML = result9;
    }
    });
     c.addEventListener('change', function() {
    
        if(c.checked){
            const a = 2;
            const b = 5;
            const result9 = a * b;
            res9.innerHTML = result9;
    }
    });

    };


//  div 10
// credit points for c programming 3

function div10() {
    const o = document.getElementById("o10");
    const A = document.getElementById("a+10");
    const a = document.getElementById("a10");
    const B = document.getElementById("b+10");
    const b = document.getElementById("b10");
    const c = document.getElementById("c10");
    const res10 = document.getElementById("res10");

    
    o.addEventListener('change', function () {
    
    if(o.checked){
        const a = 3;
        const b = 10;
        const result10 = a * b;
        res10.innerHTML = result10;
    }
    });
    
    A.addEventListener('change', function () {
    
    if(A.checked){
        const a = 3;
        const b = 9;
        const result10 = a * b;
        res10.innerHTML = result10;
    }
    });
    
        
    a.addEventListener('change', function () {
    
        if(a.checked){
            const a = 3;
            const b = 8;
            const result10 = a * b;
            res10.innerHTML = result10;
    }
        });
    
    B.addEventListener('change', function () {
    
        if(B.checked){
            const a = 3;
            const b = 7;
            const result10 = a * b;
            res10.innerHTML = result10;
    }
    });
    
     b.addEventListener('change', function () {
    
        if(b.checked){
            const a = 3;
            const b = 6;
            const result10 = a * b;
            res10.innerHTML = result10;
    }
    });
     c.addEventListener('change', function() {
    
        if(c.checked){
            const a = 3;
            const b = 5;
            const result10 = a * b;
            res10.innerHTML = result10;;
    }
    });

    };

    // further calcualtions based on the innerhtml values and returning into the fun
    // const re1 = 0;
    const but = document.getElementById("calculate");

    

    but.addEventListener("click", function(){


    const r1 = document.getElementById("res1").innerHTML;
    const r2 = document.getElementById("res2").innerHTML;

    const r3 = document.getElementById("res3").innerHTML;
    
    const r4 = document.getElementById("res4").innerHTML;
    const r5 = document.getElementById("res5").innerHTML;
    
    const r6 = document.getElementById("res6").innerHTML;
    const r7 = document.getElementById("res7").innerHTML;

    const r8 = document.getElementById("res8").innerHTML;
    const r9 = document.getElementById("res9").innerHTML;
    const r10 = document.getElementById("res10").innerHTML;

            // function to change NAN value to 0

            function changeNaN(value, replacement) {
                if (isNaN(value)) {
                  return replacement;
                }else {
                  return value;
                }
            }
              
            //   const inputs = [re1,re2,re3,re4,re5,re6,re7,re8,re9];

              const inputs = [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10]
              
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
            const add2 = parseInt(inputs[1]); 
            const add3 = parseInt(inputs[2]); 
            const add4 = parseInt(inputs[3]); 
            const add5 = parseInt(inputs[4]); 
            const add6 = parseInt(inputs[5]); 
            const add7 = parseInt(inputs[6]); 
            const add8 = parseInt(inputs[7]); 
            const add9 = parseInt(inputs[8]); 
            const add10 = parseInt(inputs[9]); 

            const data_result = [add1,add2,add3,add4,add5,add6,add7,add8,add9,add10];

            // Replace NaN with 0 without affecting existing 0 values
            for (let i = 0; i < data_result.length; i++) {
              if (isNaN(data_result[i])) {
                data_result[i] = 0.0;
              }
            }
            
            // console.log(data_result)
            // repace nan with 0 to conform that is there is any chance of arrear
            const result_1 = data_result[0];
            const result_2 = data_result[1];
            const result_3 = data_result[2];
            const result_4 = data_result[3];
            const result_5 = data_result[4];
            const result_6 = data_result[5];
            const result_7 = data_result[6];
            const result_8 = data_result[7];
            const result_9 = data_result[8];
            const result_10 = data_result[9];
                                        
            
            // adding all the inputs from the user and adding all the values
                        const adding = parseInt((result_1)+ (result_2) +(result_3)+(result_4)+ (result_5)+ (result_6)+ (result_7)+ (result_8)+(result_9)+(result_10));
            
                        // convering the inputs value into Interger in case of 
                        const di  = parseInt(adding);
                        // divide the value with the score
                        const divide = adding/26;  // score 26
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
                        else if(divide>valu && (result_1 === 0 || result_2 === 0 || result_3 === 0 || result_4 === 0 || result_5 === 0 || result_6 === 0 || result_7 ===0 || result_8===0 || result_9 === 0 || result_10 === 0)){
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