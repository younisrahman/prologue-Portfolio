// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.gallery-grid',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function (itemElem) {
      var weight = $(itemElem).find('.weight').text();
      return parseFloat(weight.replace(/[\(\)]/g, ''));
    },
  },
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {
    var number = $(this).find('.number').text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function () {
    var name = $(this).find('.name').text();
    return name.match(/ium$/);
  },
};

// bind filter button click
$('#filters').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({ filter: filterValue });
});
