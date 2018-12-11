// Message Submission Thank you Modal Trigger
$(document).ready(function() {

    if(window.location.href.indexOf('#thankYou') != -1) {
      $('#thankYou').modal('show');
    }
  

    // Link Hover Pulse
    $('.nav-linkP').hover(
      function(){ $(this).addClass('pulse infinite') },
      function(){ $(this).removeClass('pulse') }
)


  });