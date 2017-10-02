/*
	------------------------------------------------------------
												calcFlow
	------------------------------------------------------------
						implementacija jQuery plugina
*/
$(document).ready(function () {
	
	$('#calcFlow').calcFlow({
		offset: '20px',
		target: '#targetCalcFlow'
	});

	$('#negative-level1').targetReplaceClass({
		addClass : "slide-left",
		removeClass : "slide-left-leave",
		target : "#negative-level1 > ul",
		device: "tablet"
	});

	$('#negative-level2').targetReplaceClass({
		addClass : "slide-left",
		removeClass : "slide-left-leave",
		target : "#negative-level2 > ul",
		device: "tablet"
	});

	$('#negative-level3').targetReplaceClass({
		addClass : "slide-left",
		removeClass : "slide-left-leave",
		target : "#negative-level3 > ul",
		device: "tablet"
	});


	$('#mega-level1').targetReplaceClass({
		addClass : "slide-left",
		removeClass : "slide-left-leave",
		target : "#mega-level1 > ul",
		device: "tablet"
	});

	$('#mega-level2').targetReplaceClass({
		addClass : "slide-left",
		removeClass : "slide-left-leave",
		target : "#mega-level2 > ul",
		device: "tablet"
	});


	$('#info-level1').targetReplaceClass({
		addClass : "slide-top",
		removeClass : "slide-top-leave",
		target : "#info-level1 > ul",
		device: "tablet"
	});

	$('#info-level2').targetReplaceClass({
		addClass : "slide-top",
		removeClass : "slide-top-leave",
		target : "#info-level2 > ul",
		device: "tablet"
	});

	$('#info-level2-1').targetReplaceClass({
		addClass : "slide-top",
		removeClass : "slide-top-leave",
		target : "#info-level2-1 > ul",
		device: "tablet"
	});

	$('#info-level2-2').targetReplaceClass({
		addClass : "slide-top",
		removeClass : "slide-top-leave",
		target : "#info-level2-2 > ul",
		device: "tablet"
	});

});




