
function hideDiv(){
    const selectElement = document.getElementById("selectoptions");
    const selectvalue = selectElement.value;
    if(selectvalue === ""){
        window.open("none.html")
    }else if(selectvalue === "civil"){
        window.open("civil","_blank");
    }else if (selectvalue === "mech"){
        window.open("mech", "_blank");
    }else if (selectvalue === "cse"){
        window.open("CSE", "_blank");
    }else if (selectvalue === "ece"){
        window.open("ECE", "_blank");
    }else if (selectvalue === "eee"){
        window.open("EEE", "_blank");
    }

}




//global declaration of functions

const selectElement = document.getElementById("custom");
const inputContainer1 = document.getElementById("inputContainer1");
const inputContainer2 = document.getElementById("inputContainer2");
const inputContainer3 = document.getElementById("inputContainer3");
const inputContainer4 = document.getElementById("inputContainer4");
const inputContainer5 = document.getElementById("inputContainer5");
const inputContainer6 = document.getElementById("inputContainer6");
const inputContainer7 = document.getElementById("inputContainer7");
const inputContainer8 = document.getElementById("inputContainer8");




 function customselect(){
    var selectedValue = selectElement.value;
    if (selectedValue === "choose") {
        inputContainer1.style.display = "none";
        inputContainer2.style.display = "none";
        inputContainer3.style.display = "none";
        inputContainer4.style.display = "none";
        inputContainer5.style.display = "none";
        inputContainer6.style.display = "none";
        inputContainer7.style.display = "none";
        inputContainer8.style.display = "none";

    }else if(selectedValue === "1"){
        inputContainer1.style.display = "block";
        inputContainer2.style.display = "none";
        inputContainer3.style.display = "none";
        inputContainer4.style.display = "none";
        inputContainer5.style.display = "none";
        inputContainer6.style.display = "none";
        inputContainer7.style.display = "none";
        inputContainer8.style.display = "none";


    }else if(selectedValue === "2"){
        inputContainer1.style.display = "block";
        inputContainer2.style.display = "block";
        inputContainer3.style.display = "none";
        inputContainer4.style.display = "none";
        inputContainer5.style.display = "none";
        inputContainer6.style.display = "none";
        inputContainer7.style.display = "none";
        inputContainer8.style.display = "none";
    }else if(selectedValue === "3"){
        inputContainer1.style.display = "block";
        inputContainer2.style.display = "block";
        inputContainer3.style.display = "block";
        inputContainer4.style.display = "none";
        inputContainer5.style.display = "none";
        inputContainer6.style.display = "none";
        inputContainer7.style.display = "none";
        inputContainer8.style.display = "none";
    }else if(selectedValue === "4"){
        inputContainer1.style.display = "block";
        inputContainer2.style.display = "block";
        inputContainer3.style.display = "block";
        inputContainer4.style.display = "block";
        inputContainer5.style.display = "none";
        inputContainer6.style.display = "none";
        inputContainer7.style.display = "none";
        inputContainer8.style.display = "none";
    }else if(selectedValue === "5"){
        inputContainer1.style.display = "block";
        inputContainer2.style.display = "block";
        inputContainer3.style.display = "block";
        inputContainer4.style.display = "block";
        inputContainer5.style.display = "block";
        inputContainer6.style.display = "block";
        inputContainer7.style.display = "none";
        inputContainer8.style.display = "none";
    }else if(selectedValue === "6"){
        inputContainer1.style.display = "block";
        inputContainer2.style.display = "block";
        inputContainer3.style.display = "block";
        inputContainer4.style.display = "block";
        inputContainer5.style.display = "block";
        inputContainer6.style.display = "block";
        inputContainer7.style.display = "none";
        inputContainer8.style.display = "none";
    }else if(selectedValue === "7"){
        inputContainer1.style.display = "block";
        inputContainer2.style.display = "block";
        inputContainer3.style.display = "block";
        inputContainer4.style.display = "block";
        inputContainer5.style.display = "block";
        inputContainer6.style.display = "block";
        inputContainer7.style.display = "block";
        inputContainer8.style.display = "none";
    }else if(selectedValue === "8"){
        inputContainer1.style.display = "block";
        inputContainer2.style.display = "block";
        inputContainer3.style.display = "block";
        inputContainer4.style.display = "block";
        inputContainer5.style.display = "block";
        inputContainer6.style.display = "block";
        inputContainer7.style.display = "block";
        inputContainer8.style.display = "block";
    }

    return selectedValue;
    
}




    function ValidateForm() {
        var result = customselect();
        // console.log(result); // this will print the value that is selected by the user
        
   //local declaration of fuctions for opening of new div
const inputElement1 = document.getElementById("inputBox1").value;
const inputElement2 = document.getElementById("inputBox2").value;
const inputElement3 = document.getElementById("inputBox3").value;
const inputElement4 = document.getElementById("inputBox4").value;
const inputElement5 = document.getElementById("inputBox5").value;
const inputElement6 = document.getElementById("inputBox6").value;
const inputElement7 = document.getElementById("inputBox7").value;
const inputElement8 = document.getElementById("inputBox8").value;
const btn = document.getElementById("cgpa-calculate");

// recorrecting the value fromthe input box
const a = parseInt(inputElement1);
const b = parseInt(inputElement2);
const c = parseInt(inputElement3);
const d = parseInt(inputElement4);
const e = parseInt(inputElement5);
const f = parseInt(inputElement6);
const g = parseInt(inputElement7);
const h = parseInt(inputElement8);

const adding = (a+b+c+d+e+f+g+h);
// console.log(a);
   
         if(result==='1'){
        const total = parseInt(a)
        console.log(total);
        const divide =  total / 1;
        console.log(divide);
        // console.log(total);
      
        if(isNaN(inputElement1)){
            btn.style.color ="red"
            btn.innerHTML = "Enter a valid input"
        }else if(a>10){
            btn.style.color = "red"
            btn.innerHTML = "Enter a number less than 10 for SEM-01";
        } else if(divide>10){
            btn.style.color = "red"
            btn.innerHTML = "Wrong Input";
        }
        else{
        btn.style.color ="#000000"
        btn.innerHTML ="Your CGPA is:"+ " "+ divide;
        }
      
    }else if(result==='2'){
        const total = parseInt(a+b)
        console.log(total);
        const divide =  total / 2;
        console.log(divide);
        console.log(total);
        if(a>10){
            btn.style.color = "red"
            btn.innerHTML = "Enter a number less than 10 for SEM-02";
        }else if(divide>10){
            btn.style.color = "red"
            btn.innerHTML = "Wrong Input";
        }
        else if(isNaN(total)){
            btn.style.color ="red"
            btn.innerHTML = "Enter a valid input"
        }else{
        btn.style.color ="black"
        btn.innerHTML ="Your CGPA is:"+ " "+ divide;
        }
      
    }else if(result==='3'){
        const total = parseInt(a+b+c)
        console.log(total);
        const divide =  total / 3;
        console.log(divide);
        console.log(total);
        if(a>10){
            btn.style.color = "red"
            btn.innerHTML = "Enter a number less than 10 for SEM-03";
        }
        else if(isNaN(total)){
            btn.style.color ="red"
            btn.innerHTML = "Enter a valid input"
        }else{
        btn.style.color ="black"
        btn.innerHTML ="Your CGPA is:"+ " "+ divide;
        }
      
    }else if(result==='4'){
        const total = parseInt(a+b+c+d)
        console.log(total);
        const divide =  total / 4;
        console.log(divide);
        console.log(total);
        if(a>10){
            btn.style.color = "red"
            btn.innerHTML = "Enter a number less than 10 for SEM-04";
        }
        else if(isNaN(total)){
            btn.style.color ="red"
            btn.innerHTML = "Enter a valid input"
        }else{
        btn.style.color ="black"
        btn.innerHTML ="Your CGPA is:"+ " "+ divide;
        }
      
    }else if(result==='5'){
        const total = parseInt(a+b+c+d+e)
        console.log(total);
        const divide =  total / 5;
        console.log(divide);
        console.log(total);
        if(a>10){
            btn.style.color = "red"
            btn.innerHTML = "Enter a number less than 10 for SEM-05";
        }
        else if(isNaN(total)){
            btn.style.color ="red"
            btn.innerHTML = "Enter a valid input"
        }else{
        btn.style.color ="black"
        btn.innerHTML ="Your CGPA is:"+ " "+ divide;
        }
      
    }else if(result==='6'){
        const total = parseInt(a+b+c+d+e+f)
        console.log(total);
        const divide =  total / 6;
        console.log(divide);
        console.log(total);
        if(a>10){
            btn.style.color = "red"
            btn.innerHTML = "Enter a number less than 10 for SEM-06";
        }
        else if(isNaN(total)){
            btn.style.color ="red"
            btn.innerHTML = "Enter a valid input"
        }else{
        btn.style.color ="black"
        btn.innerHTML ="Your CGPA is:"+ " "+ divide;
        }
      
    }else if(result==='7'){
        const total = parseInt(a+b+c+d+e+f+g)
        console.log(total);
        const divide =  total / 7;
        console.log(divide);
        console.log(total);
        if(a>10){
            btn.style.color = "red"
            btn.innerHTML = "Enter a number less than 10 for SEM-07";
        }
        else if(isNaN(total)){
            btn.style.color ="red"
            btn.innerHTML = "Enter a valid input"
        }else{
        btn.style.color ="black"
        btn.innerHTML ="Your CGPA is:"+ " "+ divide;
        }
      
    }else if(result==='8'){
        const total = parseInt(a+b+c+d+e+f+g+h)
        console.log(total);
        const divide =  total / 8;
        console.log(divide);
        console.log(total);
        if(a>10){
            btn.style.color = "red"
            btn.innerHTML = "Enter a number less than 10 for SEM-08";
        }else if(divide>10){
            btn.style.color = "red"
            btn.innerHTML = "Wrong Input";
        }
        else if(isNaN(total)){
            btn.style.color ="red"
            btn.innerHTML = "Enter a valid input"
        }else{
        btn.style.color ="black"
        btn.innerHTML ="Your CGPA is:"+ " "+ divide;
        }
      
    }

    }
      
      ValidateForm();


const divToExpand = document.querySelector('.content');


let isExpanded = false;

divToExpand.addEventListener('mouseenter', function () {
    if (!isExpanded) {
        
        divToExpand.classList.add('expanded');
        isExpanded = true;
    }
});


// to delay the bottom to up transttin using anchor tag

document.addEventListener("DOMContentLoaded", function () {
    // Get the anchor element by its ID
    var anchor = document.getElementById("delayed-link");
  
    // Function to handle the click event
    function handleClick(event) {
      event.preventDefault(); // Prevent the default navigation behavior
  
      // Add a delay (in milliseconds) before navigating to the link
      var delay = 1000; // 1 seconds (you can adjust this value)
  
      setTimeout(function () {
        // Redirect to the link after the delay
        window.location.href = anchor.getAttribute("href");
      }, delay);
    }
  
    // Add a click event listener to the anchor element
    anchor.addEventListener("click", handleClick);
  });
  
// footer js
document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.querySelector(".feedback-form");
  
    // Show the feedback form with animation
    setTimeout(function () {
      feedbackForm.classList.add("show");
    }, 1000); // Adjust the delay as needed
  });
  