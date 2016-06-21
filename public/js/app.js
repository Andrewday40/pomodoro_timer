
$(document).ready(function(){
  var start = $('#start');
  // The $ before start refers that jquery is being used there, and needs to be at the beginning of every start.
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var breakBtn = $('#break');

  start.on('click', startCountdown);
  breakBtn.on('click', breakCountdown);

  function breakCountdown() {
    alert('alert message');
  }

  function startCountdown(){
    setInterval(function(){
       var secondsVal = +seconds.text(); //the plus makes this use numbers
       var minutesVal = +minutes.text();
       if(secondsVal === 0 && minutesVal === 0){
         breakBtn.removeClass('disabled');
         breakBtn.removeAttr('disabled');
       }
       if(secondsVal === 0){
        minutes.text(minutesVal - 1);
        seconds.text(59);
      } else {
        if(secondsVal <= 10){
          seconds.text("0" + (secondsVal-1));
      } else {
        seconds.text(secondsVal - 1);

        }

    }

    }, 1000);
  }


});
