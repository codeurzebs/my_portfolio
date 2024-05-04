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

const changeCalculator = {
  denominations: [10000, 5000, 2000, 1000, 500, 100, 50, 25],
  calculateChange: function() {
    const initialAmount = parseInt(document.getElementById('initialAmount').value);
    const purchaseAmount = parseInt(document.getElementById('purchaseAmount').value);
    if (!isNaN(initialAmount) &&!isNaN(purchaseAmount)) {
      const changeAmount = initialAmount - purchaseAmount;
      if (changeAmount >= 0) {
        const change = this.calculateChangeRecursive(changeAmount, this.denominations);
        this.displayChangeResult(change, changeAmount);
      } else {
        alert("Insufficient funds. Please enter a valid purchase amount.");
      }
    } else {
      alert("Please enter valid amounts.");
    }
  },
  calculateChangeRecursive: function(amount, denominations, index = 0, currentChange = {}) {
    if (amount === 0) return currentChange;

    const denomination = denominations[index];
    if (amount >= denomination) {
      const count = Math.floor(amount / denomination);
      const remainingAmount = amount - count * denomination;
      const change = {...currentChange };
      change[denomination] = count;
      return this.calculateChangeRecursive(remainingAmount, denominations, index + 1, change) || change;
    } else {
      return this.calculateChangeRecursive(amount, denominations, index + 1, currentChange);
    }
  },
  displayChangeResult: function(change, totalChange) {
    let resultHTML = `
      <h4>you must give:</h4>
      <ul class="list-group">
    `;
    let totalAmount = 0;
    for (const denomination in change) {
      const count = change[denomination];
      if (count > 0) {
        const amount = denomination * count;
        totalAmount += amount;
        resultHTML += `
          <li class="list-group-item">${amount} CFA So <strong>${count}</strong> times <strong>${denomination} CFA</strong></li>
        `;
      }
    }
    resultHTML += `
      </ul>
      <h4>Total: ${totalAmount} CFA</h4>
    `;
    document.getElementById('changeResult').innerHTML = resultHTML;
  }
};

function calculateChange() {
  changeCalculator.calculateChange();
}
