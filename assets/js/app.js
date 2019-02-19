// Check if html document is ready and loaded
$(document).ready(function() {
    $(function() {
      $('body').addClass('loaded');
    });

    //Navbar collapse listener
    $(document).click(function(){
      $('#collapsibleNavbar').collapse('hide')
    })

    // Message Submission Thank you Modal Trigger
    if(window.location.href.indexOf('#thankYou') != -1) {
      $('#thankYou').modal('show');
    }

    // Popover Listener
    $('.popover-dismiss').popover({
      trigger: 'focus'
    })
    
    // Modal Listeners plus animations
    // Toy Hack Event Listener Trigger
    $("#toyHackImg").click(function(){
      $('#toyHackModal').modal();
      $('#toyHackImg').addClass('animated pulse').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
      function() {
        $(this).removeClass('animated pulse');
      });

    });

    // TweetPod Event Listener Trigger
    $("#tweetImg").click(function(){
      $('#tweetModal').modal();
      $('#tweetImg').addClass('animated pulse').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
      function() {
        $(this).removeClass('animated pulse');
      });
      
    });
    
    // LittleBits Event Listener Trigger
    $("#littlebitsImg").click(function(){
      $('#littlebitsModal').modal();
      $('#littlebitsImg').addClass('animated pulse').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
      function() {
        $(this).removeClass('animated pulse');
      });
      
    });

    //robot dismiss listener
    $(".dismissIcon").click(function(){
       $(".popUpRobot").addClass("d-none");
    })

  //end of document on ready section
  });


  