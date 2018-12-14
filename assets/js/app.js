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


    //------------ Scroll Magic
	$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		// get all slides
		var slides = document.querySelectorAll("section.panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				.addIndicators()
				.addTo(controller);
		}
	});


  //end of document on ready section
  });


  