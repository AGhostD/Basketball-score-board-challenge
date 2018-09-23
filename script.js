var homeScore = 0;
var awayScore = 0;
$('#home-1').click(function(){
    homeScore = homeScore +2;
    $('#home-score').text(homeScore);
});
$("#away-1").click(function(){
    awayScore = awayScore +2;
    $("#away-score").text(awayScore);
});
$('#home-2').click(function(){
    homeScore = homeScore +1;
    $('#home-score').text(homeScore);
});
$("#away-2").click(function(){
    awayScore = awayScore +1;
    $("#away-score").text(awayScore);
});
$('#home-3').click(function(){
    homeScore = homeScore +3;
    $('#home-score').text(homeScore);
});
$("#away-3").click(function(){
    awayScore = awayScore +3;
    $("#away-score").text(awayScore);
});
