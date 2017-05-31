module.exports = function() {

  // begin timer
  var timer;

  var compareDate = new Date();
  compareDate.setDate(compareDate.getDate() + 0.02084); //just for this demo today + 30 min

  timer = setInterval(function() {
    timeBetweenDates(compareDate);
  }, 1000);

  function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

      // Timer done
      clearInterval(timer);
    
    } else {
      
      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      if (hours < 10)   hours   = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;


      $(".counter__days").text(days);
      $(".counter__hours").text(hours);
      $(".counter__minutes").text(minutes);
      $(".counter__seconds").text(seconds);
    }
  }
  // end timer

};
