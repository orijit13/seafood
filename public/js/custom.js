jQuery(document).ready(function ($) {
	$(".scroll").click(function (event) {
	  event.preventDefault();
	  $("html,body").animate(
		{ scrollTop: $(this.hash).offset().top },
		1000
	  );
	});
  });

  $(function () {
	var filterList = {
	  init: function () {
		// MixItUp plugin
		// http://mixitup.io
		$("#portfoliolist").mixitup({
		  targetSelector: ".portfolio",
		  filterSelector: ".filter",
		  effects: ["fade"],
		  easing: "snap",
		  // call the hover effect
		  //onMixEnd: filterList.hoverEffect(),
		});
	  },

	  hoverEffect: function () {
		// Simple parallax effect
		$("#portfoliolist .portfolio").hover(
		  function () {
			$(this)
			  .find(".label")
			  .stop();
			  //.animate({ bottom: 0 }, 200, "easeOutQuad");
			$(this)
			  .find("img")
			  .stop()
			  //.animate({ top: -30 }, 500, "easeOutQuad");
		  },
		  function () {
			$(this)
			  .find(".label")
			  .stop();
			  //.animate({ bottom: -40 }, 200, "easeInQuad");
			$(this)
			  .find("img")
			  .stop();
			  //.animate({ top: 0 }, 300, "easeOutQuad");
		  }
		);
	  },
	};

	// Run the show!
	filterList.init();
  });

  $("span.menu").click(function () {
	$("ul.res").slideToggle("slow", function () {
	  // Animation complete.
	});
  });

  $(window).load(function () {
	$(".flexslider").flexslider({
	  animation: "slide",
	  start: function (slider) {
		$("body").removeClass("loading");
	  },
	});
  });