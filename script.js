

let input1, input2, sym, output;




document.getElementById("btnenter").onclick = function(){
 
  input1 = document.getElementById("firstnum").value;
  input2 = document.getElementById("secondnum").value;
  sym = document.getElementById("operator").value;
 
  input1 = Number(input1);
  input2 = Number(input2);
 
  if(sym == "+"){
     output = input1 + input2;
  }


  else if(sym == "-"){
     output = input1 - input2;
  }


  else if(sym == "*"){
     output = input1 * input2;
  }


  else if(sym == "/"){
     output = input1 / input2;
  }
  else{
     document.getElementById("h12").textContent = "Not a valid operator";
  }


  if (output % 1 === 0) { // Check if output is an integer
     output = output.toFixed(0); // Convert to string without decimal part
  } else {
     output = output.toFixed(2); // Convert to string with 2 decimal places
  }
 
  document.getElementById("h12").textContent = output;
}
