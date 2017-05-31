module.exports = function() {

  // begin modal window
  $( document ).ready(function() {
    $('.trigger').click(function() {
       $('.modal-wrapper').toggleClass('open');
      $('.page-wrapper').toggleClass('blur');
       return false;
    });
  });
  // end modal window

};