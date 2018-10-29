$(document).ready(function(){

	loadHomePage();

	$('.navbar-brand').click(function(){
		loadHomePage();
	});

	$('body').on('click', '.navbar-nav li a', function(){
		loadPage($(this).text().replace(' ','').toLowerCase());
		$('.navbar-nav li').each(function(){
			$(this).removeClass('active');
		});
		$(this).closest('li').addClass('active');
		$('.navbar-collapse').removeClass('show');

	});

	function loadHomePage() {
		loadPage('home');
		$('.navbar-nav li').each(function(){
			$(this).removeClass('active');
		});
		$('.navbar-nav li:first-child').addClass('active');
	}

	function loadPage(pagetoload) {
		let loadIfHasError = (window.location.href).split('#')[1];
		fetch('pages/' + pagetoload + '.html')
			.then(response => response.text())
			.then(response => $('#main-container').html(response))
			.catch(function(error){
				loadHomePage(loadIfHasError);
			});
		$("html, body").animate({ scrollTop: 0 });
	}

});
