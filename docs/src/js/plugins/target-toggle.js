/**
 * ------------------------------------------------------
 *  			     TargetToggle
 * ------------------------------------------------------
 */


(function (widnow, document, $) {

	var NAME = 'targetToggle';

	var Selector = {
		DATA : '[data-target-toggle]'
	}

  class TargetToggle {
  	
  	constructor(elem, initOptions) {
  		this.elem = elem;
    	this.$elem = $(elem);
    	this.initOptions = initOptions;

    	this.init();
  	}

    init() {
    	this.options = $.extend({}, $.fn[NAME].defaults, this.initOptions); 
        
        if ($.type(this.options.target) === 'undefined') {
          this.options.target = $(this.$elem);
        }
    	
    	$(this.$elem).on(this.options.event, function () {

    		$(this.options.target).toggleClass(this.options.className);
    		if ($.type(this.options.newContent) === 'string') {
    			this.setContent();
    		}
    	}.bind(this))
    	
    	return this;
    }

    setContent() {
    	var content;

    	if ($.type($(this.options.target).data("prevContent")) === 'undefined') {
    		$(this.options.target).data("prevContent", $(this.options.target).text());
    	}

    	if ($(this.options.target).hasClass(this.options.className)) {
    		content = this.options.newContent;
    	} else {
    		content = $(this.options.target).data("prevContent");
    	}

    	$(this.options.target).text(content);
    }

  };


	$.fn[NAME] = function (options) {
		return this.each(function () {
			new TargetToggle(this, options); 
		});
	}

	// default parametri
	$.fn[NAME].defaults = {
		event: 'click'
	}

/**
	*  -------------------------------
	*   	  HTML5 DATA API
	*  -------------------------------
	*/

	$(document).ready(function () {
		$(Selector.DATA).each(function () {
			var data = JSON.parse(this.dataset.targetToggle);
			$(this)[NAME](data);
		})
	});

	window.TargetToggle = TargetToggle;

}(window, document, jQuery));




