// ACTION FUNCTIONALITY 
const textArea = document.getElementById("text-area");
const buttons = document.querySelectorAll(".section-3 button");
let first = "";
let second = "";
let operator = "";
let result = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    console.log(buttons[i].innerText+" is clicked");
    let buttonId = buttons[i].getAttribute("id");
    let buttonClass = buttons[i].getAttribute("class");

    let value = buttons[i].innerText; 
    

    if (result !== "") {
          if (buttonClass === "number") {
            first = "" ; 
            result = "" ; 
          }
          else{
            if(buttonClass === "operator"){
                  first = result ; 
                  result = "" ; 
                  second = "" ; 
                  operator = value ; 
            }
    }
    }


    
    if(buttonClass === "number"){
    
      if(operator != ""){
        second = handleNumberInput(second , value); 
        display(second);
      }else{
        first = handleNumberInput(first , value);
        display(first);
      }
    }

    else if(buttonClass === "operator"){
    
            textArea.value = "";
            operator = value ; 

    }

    else if(buttonId === "DEL"){
      if (textArea.value.length > 0) {
        if (textArea.value === first) {
          first = first.substring(0, first.length - 1);
        } else if (textArea.value === second) {
          second = second.substring(0, second.length - 1);
        } else {
          operator = "";
        }
        textArea.value = textArea.value.substring(0, textArea.value.length - 1);
      }
    }


    else if(buttonId === "reset"){
        reset() ;
    }



    else{
      console.log("first is : "+first+" second is : "+second +" operator is : "+operator );

   
    
  
   
    
      result = performance(first, second, operator);
      display(result);
      first = result;
      operator = "";
      second = "";
    }


  
  });
}


//Comma Seprated Number function 
function formatNumberWithCommas(number, threshold = 1000) {
  if (number >= threshold) {
      return number.toLocaleString();
  } else {
      return number.toString();
  }
}


// Reset Function
function reset(){
  first = "" ; 
  second = "";
  operator = "";
  result = "" ; 
  textArea.value = "";
}

// Display Function

function display(answer){
     textArea.value = formatNumberWithCommas(parseFloat(answer)) ; 
}


// Handles Decimal and all input values
function handleNumberInput(currentNumber, input) {
 
  if (input === "." && currentNumber.includes(".")) {
    return currentNumber;
  }
  return currentNumber + input;
}



// Performs Action
function performance(first, second, operator) {
  console.log("Performing calculation:", first, operator, second);

  first = parseFloat(first);
  second = parseFloat(second);
  switch (operator) {
    case "+":
      console.log("Performing addition");
      return first + second;
    case "-":
      console.log("Performing subtraction");
      return first - second;
    case "/":
      if (second !== 0) {
        console.log("Performing division");
        return first / second;
      } else {
        console.log("Division by zero");
        return "Cannot divide by zero";
      }
    case "x":
      console.log("Performing multiplication");
      return first * second;
    case "" : 
        return first ; 
    default:
      console.log("Invalid operator");
      return "Invalid operator";
  }
}




// THEME FUNCTIONALITY 

let theme1 = document.getElementById("theme-1");
let theme2 = document.getElementById("theme-2");
let theme3 = document.getElementById("theme-3");
let body  = document.body ; 


theme1.addEventListener("click", () => {

  body.classList.remove("theme2", "theme3");
  body.classList.add("theme1");
 theme1.style.opacity = "1";
 theme2.style.opacity = "0";
 theme3.style.opacity = "0";
});

theme2.addEventListener("click", () => {
  body.classList.remove("theme1", "theme3");
  body.classList.add("theme2");
  theme1.style.opacity = "0";
 theme2.style.opacity = "1";
 theme3.style.opacity = "0";

 
});

theme3.addEventListener("click", () => {
  body.classList.remove("theme1", "theme2");
  body.classList.add("theme3");
  theme1.style.opacity = "0";
  theme2.style.opacity = "0";
  theme3.style.opacity = "1";
 


  
});
