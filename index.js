(function() {
  'use strict';

  var green_button_on = false;
  var yellow_button_on = false;
  var red_button_on = false;

  // YOUR CODE HERE
  //When a user clicks on the "Stop" button, toggle the stop bulb's color.
  let stop = document.getElementById('stopButton');
  let stopL = document.getElementById('stopLight');
  var i = 1;
  stop.addEventListener("click", function(){
  i++;
  if(i%2===0){
    red_button_on === true;
    stopL.style.backgroundColor = "red";
    console.log('red button on')
  } else {
    red_button_on === false;
    stopL.style.backgroundColor = "black";
    console.log('red button off')
  }
  })
  //When a user clicks on the "Slow" button, toggle the slow bulb's color.
let slow = document.getElementById('slowButton');
let slowL = document.getElementById('slowLight');
var addIt = 1;
slow.addEventListener("click", function(){
  addIt++;
  if(addIt%2===0){
    yellow_button_on === true;
    slowL.style.backgroundColor = "yellow";
    console.log('yellow button on')
  } else {
    yellow_button_on === false;
    slowL.style.backgroundColor = "black";
    console.log("yellow button off")
  }
  }

)
  //When a user clicks on the "Go" button, toggle the go bulb's color.
let go = document.getElementById('goButton');
let goL = document.getElementById('goLight');
var counter = 1;
go.addEventListener("click", function(){
  counter++;
  if(counter%2===0){
    green_button_on === true;
     goL.style.backgroundColor = "green";
     console.log("green button on")
  } else {
    green_button_on === false;
     goL.style.backgroundColor = "black";
     console.log("green button off");
  }
})

let button = document.getElementsByClassName('button')

//function mouseenter(){
//   console.log('Entered button')
//}
//function mouseleave(){
//  console.log('Left button')
//}
for(var i=0;i<button.length; i++){

  function mouseenter(){
     console.log('Entered ' + ' button')
  }
  function mouseleave(){
    console.log('Left ' + ' button')
  }
  button[i].addEventListener('mouseenter', mouseenter);
  button[i].addEventListener('mouseleave', mouseleave);
}

})();
