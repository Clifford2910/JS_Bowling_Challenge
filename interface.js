$(document).ready(function() {
  $('#button').click(function() {

    var game = new BowlingGame();

    strikeLoop(game, '#frame1roll1', '#frame1roll2');
    strikeLoop(game, '#frame2roll1', '#frame2roll2');
    strikeLoop(game, '#frame3roll1', '#frame3roll2');
    strikeLoop(game, '#frame4roll1', '#frame4roll2');
    strikeLoop(game, '#frame5roll1', '#frame5roll2');
    strikeLoop(game, '#frame6roll1', '#frame6roll2');
    strikeLoop(game, '#frame7roll1', '#frame7roll2');
    strikeLoop(game, '#frame8roll1', '#frame8roll2');
    strikeLoop(game, '#frame9roll1', '#frame9roll2');
    roll19 = Number($('#frame10roll1').val())
    game.roll(roll19)
    roll20 = Number($('#frame10roll2').val())
    game.roll(roll20)
    roll21 = Number($('#frame10roll3').val())
    game.roll(roll21)

    $('#result').text(game.score());

  });
});

function strikeLoop(game, frameFirstRoll, frameSecondRoll) {
  var bowlRoll = Number($(frameFirstRoll).val());
  game.roll(bowlRoll)
  if (bowlRoll != 10) {
      var nextBowlRoll = Number($(frameSecondRoll).val());
      game.roll(nextBowlRoll);
  }
};
