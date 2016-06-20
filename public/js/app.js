
$(document).ready(function(){
  var start = $('#start');
  // The $ before start refers that jquery is being used there, and needs to be at the beginning of every start.
  var minutes = $('#minutes');
  var seconds = $('#seconds');

  start.on('click', startCountdown);

  function startCountdown(){
    setInterval(function(){
       var secondsVal = +seconds.text(); //the plus makes this use numbers
      if(secondsVal === 0){
        seconds.text(59);
      } else {
        seconds.text(secondsVal - 1);
      }

    }, 1000);
  }


});
