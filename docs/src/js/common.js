$(document).ready(function () {

	$('[data-theme]').each(function () {

		if ($(this).data('theme') === $('body').attr('class')) {
			$(this).addClass('is--active');
		}

		$(this).on('click', function () {
			const theme = $(this).data('theme');
			
			$('body').attr('class', theme);
			$(this).addClass('is--active');

			$(this).parent().siblings().each(function () {
				$(this).children().removeClass('is--active');
			});
						
		});

	});

	const loc = window.location.pathname.split('/').pop();
		$('#nav-main a').not('[data-theme]').each(function () {
			if ($(this).attr('href') === loc) {
			$(this).addClass('is--active');
		}
	});


	$('#theme-change').targetReplaceClass({
		addClass : "slide-top",
		removeClass : "slide-top-leave",
		target : "#nav-main .nav__sub-list",
		device: "tablet"
	});

});



