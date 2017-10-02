/*
	------------------------------------------------------------
									    targetToggle
	------------------------------------------------------------
						implementacija jquery plugin-a
*/
$(document).ready(function () {
	$('#btn-toggle').targetToggle({
		className : "btn--is-active",
		newContent : "btn btn--primary btn--is-active"
	});
});
