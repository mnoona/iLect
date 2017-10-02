$(document).ready(function() {
 2      
 3  /* For the sticky navigation */
 4  $('.js--section-features').waypoint(function(direction) {
 5      if (direction == "down") {
 6          $('nav').addClass('sticky');
 7      } else {
 8          $('nav').removeClass('sticky');
 9      }
10  }, {
11    offset: '60px;'
12  });
13      
14          /*SCROLL ON BUTTON*/
15      $('.js--scroll-to-plans').click(function () {
16          $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
17          
18          
19          
20      });
21  
22     });