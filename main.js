document.addEventListener('DOMContentLoaded', init);

function init(){
  var button = document.getElementById('HIIIII');
  button.addEventListener('click', buttonClicked);

  document.getElementById('buttons')
  .addEventListener('click', numButtonClicked);

  //on load?
  generateRandomNumber();
  getTotal();

}

function numButtonClicked(event){
  if(event.target.matches('button')){
    console.log(event.target.textContent);
  }
}

function buttonClicked(event){
  //get that number element
  var numberElement = document.getElementById('number');
  //figure out what number is inside
  var numString = numberElement.textContent;
  var num = parseInt(numString);
  //add one to that number
  num++;
  //set the text to the new number
  numberElement.textContent = num;
}

function generateRandomNumber(event){
  document.getElementById("leftNum").innerHTML = Math.floor((Math.random() * 10) + 1);
  document.getElementById("rightNum").innerHTML = Math.floor((Math.random() * 10) + 1);
}

//ADD
function getTotal(event){
  var leftNumberElement = document.getElementById('leftNum');
  var rightNumberElement = document.getElementById('rightNum');
  //figure out what number is inside
  var leftNumString = leftNumberElement.textContent;
  var rightNumString = rightNumberElement.textContent;

  var left = parseInt(leftNumString);
  var right = parseInt(rightNumString);
  //add one to that number
  total = left + right;
  //set the text to the new number

  console.log('The total is:',total);
}
