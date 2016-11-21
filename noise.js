$(document).ready( function() {
  // your code here

  function findUrl(letter) {
  	var foundUrl = document.getElementById(letter+"Audio").firstElementChild.src.slice(-16)
  	return foundUrl
  }

    function makeNoise(url) {
    	new Audio(url).play();
  };


  $('.note').click(function(event) {
  	var note = $(this).html()
  	makeNoise(findUrl(note));
  });

  $('body').keydown(function(event) {
  	console.log(event.key);
 		var note = event.key.toLowerCase();
 		makeNoise(findUrl(note));
  	})
});
