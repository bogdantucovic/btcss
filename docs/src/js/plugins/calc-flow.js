/**
 * ------------------------------------------------------
 *  										CalcFlow
 * ------------------------------------------------------
 *
 *  Plugin se koristi za odredjivanje razmaka od elementa koji je izvan toka, 
 *  position: fixed || position:absolute, i cije dimenzije width ili height su nepoznate
 *
 */


(function (widnow, document, $) {

	var NAME = 'calcFlow';

	var Selector = {
		DATA : '[data-calc-flow]'
	}

  class CalcFlow {
  	
  	constructor(elem, initOptions) {
  		this.elem = elem;
    	this.$elem = $(elem);
    	this.initOptions = initOptions;

    	this.init();
  	}

    init() {
    	this.options = $.extend({}, $.fn[NAME].defaults, this.initOptions); 

    	const targetProp = this.getTargetProp();
    	let targetDimension = this.getTargetDimension(targetProp);
    	const calc = this.isCalc();

    	$(this.$elem).css('position','relative');
    	$(this.$elem).css(this.options.pos, targetDimension).css(this.options.pos, `+=${this.options.offset}`);

      calc &&  $(this.$elem).css(targetProp, '100%').css(targetProp, `-=${targetDimension}`);

    	return this;
    }

    /**
     *  @return{string} za izracunavanje horizontalnog razmaka potrebna
     *  je sirina,a vertikalnog visina ciljnog elementa pozicije(fixed || absolute) 
     */
    getTargetProp() {
			if (this.options.pos === 'left' || this.options.pos === 'right') {
				return 'width';
			}
			return 'height';
    }

    /**
     *  @return{string} visina ili sirina ciljnog elementa u odnosu na koji se racuna razmak
     *  1. najcesci ciljni(fixed || absolute) element je prethodni element, koji predstavlja
     *  default target element
     */
    getTargetDimension(targetProp) {
    	if ($.type(this.options.target) === 'undefined') {
				return $(this.$elem).prev().css(targetProp); /* 1 */
			} else {
				return $(this.options.target).css(targetProp);
			}
    }

    /**
     *  @return{boolean} ako je potrebno izracunati visinu ili sirinu elementa koja predstavlja razliku
     *  100% - visina/sirina ciljnog elementa onda se dodaje svojstvo calc
     *  ako je zahteva horizontalan razmak po poziciji(pos = left || right) jsano je da je potrebno izracunati sirinu
     */
   	isCalc() {
   		if (this.options.calc === 'true') { 
   			return true;
   		}
   		return false;
    }

  };


	$.fn[NAME] = function (options) {
		return this.each(function () {
			new CalcFlow(this, options); 
		});
	}

	// default parametri
	$.fn[NAME].defaults = {
		pos: 'top',
		calc: 'false'
	}

/**
	*  -------------------------------
	*   				HTML5 DATA API
	*  -------------------------------
	*/

	$(document).ready(function () {
		$(Selector.DATA).each(function () {
			const data = JSON.parse(this.dataset.calcFlow);
			$(this)[NAME](data);
		})
	});

	window.CalcFlow = CalcFlow;

}(window, document, jQuery));




