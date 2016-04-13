document.addEventListener('DOMContentLoaded', init);
var finalAns;
function init(){
  document.getElementById('buttons')
  .addEventListener('click', numButtonClicked);
  generateRandomNumber();
  var submission = document.getElementById('submitButton');
  submission.addEventListener('click', submitButt);
  getTotal();
  var clearing = document.getElementById('clearButton');
  clearing.addEventListener('click', clearButt);

}

function numButtonClicked(event){
  console.log('numbuttclicked!')
  var userAns = document.getElementById('userAnswer')
  if(event.target.matches('button')){
    console.log(event.target.textContent);
      userAns.textContent += event.target.textContent;
    }
    finalAns = userAns.textContent;
    console.log('finalAns:',finalAns);
}

function generateRandomNumber(event){
  document.getElementById("leftNum").innerHTML = Math.floor((Math.random() * 10) + 1);
  document.getElementById("rightNum").innerHTML = Math.floor((Math.random() * 10) + 1);
}

function submitButt(event){
  console.log('Correct! OR Incorrect!');
  console.log(total);
  console.log('yo:',finalAns);
  if(total == finalAns){
    console.log('Correct');
    document.getElementById("result").innerHTML = "You got it!";
  } else{
    console.log('Incorrect');
    document.getElementById("result").innerHTML = "Oops! Try Again.";
  }

}

function getTotal(event){
  var leftNumberElement = document.getElementById('leftNum');
  var rightNumberElement = document.getElementById('rightNum');
  var leftNumString = leftNumberElement.textContent;
  var rightNumString = rightNumberElement.textContent;

  var left = parseInt(leftNumString);
  var right = parseInt(rightNumString);
  total = left + right;
  console.log('The total is:',total);
}

function clearButt(event){
  document.getElementById("userAnswer").innerHTML = "";
  document.getElementById("result").innerHTML = "";

}
