module.exports = function() {

  // begin play video
  $('.button').on("click", function(){
    $('#news-section__video').addClass('active');
  });

  $(document).on('click', '.button', function() {
    var $video = $('#video'),
      src = $video.attr('src');
   
    $video.attr('src', src + '&autoplay=1');
  });
  // end play video

};