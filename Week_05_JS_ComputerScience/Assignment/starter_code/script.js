$(document).ready(function() {
  $('#submit-btn').click(function(event){
      event.preventDefault();
    
    var city = $('#city-type').val();

    city = city.toLowerCase ();

    if(city === 'new york city' || city === 'nyc' || city === 'new york') {
      $('body').attr('class', 'nyc');
    } else if (city === 'san francisco' || city == 'sf' || city == 'bay area'){
      $('body').attr('class', 'sf');
    }else if (city === 'la' || city === 'los angeles' || city === 'hollywood'){
      $('body').attr('class', 'la');
    } else if (city === 'austin' || city === 'au'){
      $('body').attr('class', 'austin');
    } else if (city === 'sydney' || city === 'down under'){
      $('body').attr('class', 'sydney');
    } else {
      alert('Uh Oh...No picture for your city!');
    }

  });
});


//wait for document to be loaded up before you run javascript code is document.ready //

// || means OR //

/* add data normalization to catch edge cases, example, if we are checking for lower case and 
someone does upper case, want to normalize */
 

 /* three different ways to change background image: 
  1. $('body'),attr('class', 'nyc'); --> change image to nyc image that exists in CSS - this clears out existing class list to add new one 
  2. $('body').attr('class', ''); 
     $('body').addClass('nyc'); --> this one is less efficienct, more readable 
  3. $('body').css('background-image', 'url(../images/nyc.jpg)'); --> works with CSS value tags */

  // else after if and else if is a catch all, does not need else (){} just needs else {}