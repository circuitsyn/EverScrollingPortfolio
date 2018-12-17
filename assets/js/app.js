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

    //------------ Scroll Magic
	// $(function () { // wait for document ready
	// 	// init
	// 	var controller = new ScrollMagic.Controller({
	// 		globalSceneOptions: {
  //       triggerHook: 'onLeave',
  //       globalSceneOptions: {duration: 100}
	// 		}
	// 	});

	// 	// get all slides
	// 	var slides = document.querySelectorAll("section.panel");

	// 	// create scene for every slide
	// 	for (var i=0; i<slides.length; i++) {
	// 		new ScrollMagic.Scene({
	// 				triggerElement: slides[i]
	// 			})
	// 			.setPin(slides[i])
	// 			.addIndicators()
	// 			.addTo(controller);
  //   }
    

    // nav bar highlight build scenes
    // new ScrollMagic.Scene({triggerElement: "#home", offset: 1})
    //   .setClassToggle("#navItem1", "navHighlight") // add class toggle
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(controller);
    // new ScrollMagic.Scene({triggerElement: "#values", offset: 1})
    //   .setClassToggle("#navItem2", "navHighlight") // add class toggle
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(controller);
    // new ScrollMagic.Scene({triggerElement: "#technologies", offset: 1})
    //   .setClassToggle("#navItem3", "navHighlight") // add class toggle
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(controller);
    // new ScrollMagic.Scene({triggerElement: "#projects", offset: 1})
    //   .setClassToggle("#navItem4", "navHighlight") // add class toggle
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(controller);

      // side bar fade in and out build scene
  //     var scene = new ScrollMagic.Scene({triggerElement: "#sideCardTrigger", duration: "250%", offset: -100})
  //     // trigger animation by adding a css class
  //     .setClassToggle("#sideCard", "zap")
  //     .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
  //     .addTo(controller);
	// });


  //end of document on ready section
  });


  