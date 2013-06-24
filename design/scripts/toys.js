jQuery(document).ready(function($) {
	$('.scrollto_js').click(function(e) {
		e.preventDefault();
		$.scrollTo($($(e.currentTarget).attr('href')), 300);
	});
	

});