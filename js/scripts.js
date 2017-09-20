function binaryizor(inputNumber) {
  var binaryArray = [];
  var output = ""
  while (inputNumber/2 >= 1) {
    var oddChecker = inputNumber % 2;
    if (oddChecker === 1) {
      inputNumber = inputNumber-1;
      inputNumber = inputNumber / 2;
      binaryArray.push(1);
      if (inputNumber === 1) {
        binaryArray.push(1);
      }
    } else {
      inputNumber = inputNumber / 2;
      binaryArray.push(0);
    }
  }
  output = binaryArray.join("");
  if (output.match(/[^1]/g)){
    binaryArray.push(1);
  }
  binaryArray.reverse();
  output = binaryArray.join("");
  return output;
}

$(document).ready(function(){
  $("form#binary").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    $("#binary").hide();
    $("#output").text(binaryizor(userInput));
  });
});

// Divide the number by 2.
// Get the integer quotient for the next iteration.
// Get the remainder for the hex digit.
// Repeat the steps until the quotient is equal to 0.
