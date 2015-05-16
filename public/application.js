$(document).ready(function() {

    $(document).on('click', '#hit_form input', function() {
    $.ajax({
      type: 'POST', // this is a hash. We are using POST because it is a form we are highhacking
      url: '/game/player/hit',
      //data: {} -> only if we have additional paramaters, not the case in our app
    }).done(function(msg) {
      $('#game').replaceWith(msg);
    });
    return false;
  });

    $(document).on('click', '#stay_form input', function() {
    $.ajax({
      type: 'POST', 
      url: '/game/player/stay'
    }).done(function(msg) {
      $('#game').replaceWith(msg);
    });
      return false;
    });

    $(document).on('click', '#dealer_hit_form input', function() {
    $.ajax({
      type: 'POST', 
      url: '/game/dealer/hit'
    }).done(function(msg) {
      $('#game').replaceWith(msg);
    });
      return false;
    });

});