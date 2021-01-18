/*On Page Load, Randomise cards and Render value to screen*/

$(document).ready(function() {
    
    $.ajax({
        url: "libs/php/getCards.php",
        type: 'GET',
        dataType: 'json',

        success: function(result) {

            //console.log(result);

            /*Initialise Array and Score/Lives Count */

            let cardArray = [];
            let score = 0;
            let lives = 3;

            /*Choose a Random Card*/

            function shuffle(a) {
                for (let i = a.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                cardArray.push(a[0]);
            }

            shuffle(result)

            $('#score').append(`Score = ${score} Lives = ${lives}`);
            
            /*Setup with random number*/

            $('#card').append(`${cardArray[0]['value']} ${cardArray[0]['suit']}`);  

            $('#higher').on('click', function() {

                $.ajax({
                    url: "libs/php/getCards.php",
                    type: 'GET',
                    dataType: 'json',
            
                    success: function(result) {
            
                        shuffle(result);

                        console.log(cardArray[cardArray.length -1]);

                        $('#score').empty();
                        $('#card').empty();

                        if(cardArray[cardArray.length -1]['value'] > cardArray[cardArray.length -2]['value']){
                            score += 1;
                        } else {
                            lives -= 1;
                        }
                        
                        $('#score').append(`Score = ${score} Lives = ${lives}`);
                        $('#card').append(`${cardArray[cardArray.length -1]['value']} ${cardArray[cardArray.length -1]['suit']}`);  
                        
                        
                    }
                })
                
            });
            
        }
    })
   
});



