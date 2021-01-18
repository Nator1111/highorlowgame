/*Choose a Random Card*/

/*function randomCard(array) {
    for(let i = 0; i < array.length; i++){
        Math.random()
    }
}*/

/*On Page Load, Randomise cards and Render value to screen*/

$(document).ready(function() {
    
    $.ajax({
        url: "libs/php/getCards.php",
        type: 'GET',
        dataType: 'json',

        success: function(result) {

            //console.log(result);

            let score = 0;
            let lives = 3;

            $('#score').append(`Score = ${score} Lives = ${lives}`);

            $('#card').append(`${result[6]['value']}`);
            
        }
    })
   
});



