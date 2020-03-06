
$(function() {

	$('.js-scrollTo').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});

	$(document).click(function(e) { // Au clic sur un élément
		if (!$(e.target).is('.nav-link')) { // Si target n'est pas .nav-link
	  	$('.navbar-collapse').collapse('hide');	// hide navbar
	  }
	});

	$('.navbar-collapse a').click(function(e){ // Au clic sur un lien de la navbar
    $('.navbar-collapse').collapse('hide'); // hide navbar
  });


	 $('.img-fluid').click(function(e){
    	var sourceMax = $(this).attr('src');
    	var altMax = $(this).attr('alt');
    	$('.img-max').html('<img src="' + sourceMax + '" alt="' + altMax + '">');
    	console.log($('.img-max').html());
    	$('.img-max').fadeIn('slow').css('display','flex');
    });

	 $('.img-max').click(function(e){
    	$('.img-max').fadeOut('fast');
    });
});
