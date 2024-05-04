// My coin projet JS
function updateChange() {
  const totalAmount = parseFloat(document.getElementById('totalAmount').value) || 0;
  const denominations = {
    tenThousand: 10000,
    fiveThousand: 5000,
    twoThousand: 2000,
    oneThousand: 1000,
    fiveHundred: 500,
    oneHundred: 100,
    fifty: 50,
    twentyFive: 25
  };
  for (const denomination in denominations) {
    const value = denominations[denomination];
    const count = Math.floor(totalAmount / value);
    document.getElementById(denomination).textContent = count;
  }
}
document.getElementById('totalAmount').addEventListener('input', updateChange);
updateChange();

(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
