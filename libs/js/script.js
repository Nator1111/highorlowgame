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

            /*Setup Function Fo onclick 'higher' button*/

            $('#higher').on('click', function() {

                $.ajax({
                    url: "libs/php/getCards.php",
                    type: 'GET',
                    dataType: 'json',
            
                    success: function(result) {

                        shuffle(result);

                        //console.log(cardArray[cardArray.length -1]);

                        /*Empty HTML*/

                        $('#score').empty();
                        $('#card').empty();

                        /*Compare last two values in array and alter score/lives accrodingly*/

                        if(cardArray[cardArray.length -1]['value'] > cardArray[cardArray.length -2]['value']){
                            score += 1;
                        } else {
                            lives -= 1;
                        }
                        
                        /*Append new score/lives values*/ 

                        $('#score').append(`Score = ${score} Lives = ${lives}`);
                        $('#card').append(`${cardArray[cardArray.length -1]['value']} ${cardArray[cardArray.length -1]['suit']}`);  
                        
                        /*Set up game lost*/
                        if(lives === 0){
                            $('#score').empty();
                            $('#card').empty();
                            $('#higher').hide();
                            $('#lower').hide();

                            $('#score').append(`Game over`);
                            
                        } 
                        
                        /*Set up game won*/
                        if(score === 3){
                            $('#score').empty();
                            $('#card').empty();
                            $('#higher').hide();
                            $('#lower').hide();

                            $('#score').append(`Well Done! You Won!`);
                            
                        }
                    }
                })
                
            });

            /*Setup Function Fo onclick 'lower' button*/

            $('#lower').on('click', function() {

                $.ajax({
                    url: "libs/php/getCards.php",
                    type: 'GET',
                    dataType: 'json',
            
                    success: function(result) {

                        shuffle(result);

                        //console.log(cardArray[cardArray.length -1]);

                        /*Empty HTML*/

                        $('#score').empty();
                        $('#card').empty();

                        /*Compare last two values in array and alter score/lives accrodingly*/

                        if(cardArray[cardArray.length -1]['value'] < cardArray[cardArray.length -2]['value']){
                            score += 1;
                        } else {
                            lives -= 1;
                        }
                        
                        /*Append new score/lives values*/ 
                        $('#score').append(`Score = ${score} Lives = ${lives}`);
                        $('#card').append(`${cardArray[cardArray.length -1]['value']} ${cardArray[cardArray.length -1]['suit']}`);  
                        

                        /*Set up game lost*/
                        if(lives === 0){
                            $('#score').empty();
                            $('#card').empty();
                            $('#higher').hide();
                            $('#lower').hide();

                            $('#score').append(`Game over`);
                            
                        } 
                        
                        /*Set up game won*/
                        if(score === 3){
                            $('#score').empty();
                            $('#card').empty();
                            $('#higher').hide();
                            $('#lower').hide();

                            $('#score').append(`Well Done! You Won!`);
                            
                        }
                    }
                })
                
            });

            /*Setup Reset Button*/

            $('#reset').on('click', function() {

                $.ajax({
                    url: "libs/php/getCards.php",
                    type: 'GET',
                    dataType: 'json',

                    success: function(result) {

                        /*Refresh browser*/

                        $('#score').empty();
                        $('#card').empty();
                        $('#higher').show();
                        $('#lower').show();

                        /*Re-initialise Score/Lives Count */

                        score = 0;
                        lives = 3;

                        shuffle(result)

                        $('#score').append(`Score = ${score} Lives = ${lives}`);
                        
                        /*Setup with random number again*/

                        $('#card').append(`${cardArray[cardArray.length -1]['value']} ${cardArray[cardArray.length -1]['suit']}`);  
                        
                    }
                })
                
            });
            
        }
    })
   
});





