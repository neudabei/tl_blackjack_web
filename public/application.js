$(document).ready(function() {
  player_hits();
  player_stays();
  dealer_hits();
});

  function player_hits() {
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
  }

  function player_stays() {
    $(document).on('click', '#stay_form input', function() {
      $.ajax({
        type: 'POST', 
        url: '/game/player/stay'
      }).done(function(msg) {
        $('#game').replaceWith(msg);
      });
        return false;
    });
  }

  function dealer_hits() {
    $(document).on('click', '#dealer_hit_form input', function() {
      $.ajax({
        type: 'POST', 
        url: '/game/dealer/hit'
      }).done(function(msg) {
        $('#game').replaceWith(msg);
      });
        return false;
    });
  }