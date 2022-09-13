


//Get the button.
mybutton = document.getElementById("top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function SpectreTabs(tabselector) {
  this.items = document.querySelectorAll(tabselector);
  for (i = 0; i < this.items.length; i++) {
    // On click.
    this.items[i].addEventListener('click', function(e) {
      var tabcontainer = e.target.closest('.tab-container');

      tabcontainer.querySelector('.tab .active').classList.remove('active');
      e.target.classList.add('active');

      tabcontainer.querySelector('.tab-content .active').classList.remove('active');
      tabcontainer.querySelector('.' + e.target.getAttribute('data-tab')).classList.add('active');
    });
  }
}

SpectreTabs('.tab [data-tab]');


// https://codepen.io/michaelmano/pen/poRqPVj
var populateVar = function() {
  var el = document.querySelectorAll('.js-populate-var');

  el.forEach(function(el) {
    var prefix = 's';
    el.innerHTML = getComputedStyle(el)
      .getPropertyValue('--' + prefix + '-' + el.dataset.var);
  });
};

populateVar();


var setLightnessLevel = function(name, value) {
  var lightness = getComputedStyle(document.body)
    .getPropertyValue('--s-' + name + '-l')
    .match(/[-0-9.]+/g).reduce(function (a, b) {
      return parseFloat(a) + parseFloat(b);
    });

  if (value < 0) {
    value = (value * (lightness / 100));
    document.querySelector('.lightness-level').innerHTML = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(value) + '%';
  }

  if (value > 0) {
    value = value * ((100 - lightness) / 100);
    document.querySelector('.lightness-level').innerHTML = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(value) + '%';
  }

  if (value === 0) value = 0;

  (document.querySelector(':root')).style.setProperty('--s-' + name + '-l-l', value + '%');
};
