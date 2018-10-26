$(document).ready(function(){

	loadPage('home');

	$('.navbar-brand').click(function(){
		loadPage('home');
	});

	$('body').on('click', 'li a', function(){
		loadPage($(this).text().replace(' ','').toLowerCase());

		$('.navbar-nav li').each(function(){
			$(this).removeClass('active');
		});

		$(this).closest('li').addClass('active');

		$('.navbar-collapse').removeClass('show');

	});



	function loadPage(pagetoload) {

		fetch('pages/' + pagetoload + '.html')
			.then(response => response.text())
			.then(response => $('#main-container').html(response));
		

		


		$("html, body").animate({ scrollTop: 0 });
	}



});