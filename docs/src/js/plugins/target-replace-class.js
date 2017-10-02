/**
 * ------------------------------------------------------
 *  			     TargetReplaceClass
 * ------------------------------------------------------
 */


(function (widnow, document, $) {

	var NAME = 'targetReplaceClass';

	var Selector = {
		DATA : '[data-target-replace-class]'
	}

  class TargetReplaceClass {
  	
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

      const winWidth = $(window).width();
      this.detectDevice(winWidth);

      $(window).resize(() => {
        const windowWidth = $(window).width();
        this.detectDevice(windowWidth);
      });

  
    	return this;
    }

    detectDevice(windowWidth) {
      switch(this.options.device) {
        case 'mobile-only':
          if (windowWidth < 640) {
            this.replaceClass();
          }
          break;
        case 'tablet':
          if (windowWidth > 640) {
            this.replaceClass();
          }
          break;
        default:
          this.replaceClass();
      }
    }

    replaceClass() {
      $(this.$elem).on({
        [this.options.eventAddClass]: () => {
          $(this.options.target).removeClass(this.options.removeClass).addClass(this.options.addClass);
        },
        [this.options.eventRemoveClass]: () => {
          $(this.options.target).removeClass(this.options.addClass).addClass(this.options.removeClass);
        }
      })
    }

  };


	$.fn[NAME] = function (options) {
		return this.each(function () {
			new TargetReplaceClass(this, options); 
		});
	}

	// default parametri
	$.fn[NAME].defaults = {
		eventAddClass: 'mouseover',
    eventRemoveClass: 'mouseleave'
	}

  /**
	*  -------------------------------
	*          HTML5 DATA API
	*  -------------------------------
	*/

	$(document).ready(function () {
		$(Selector.DATA).each(function () {
			var data = JSON.parse(this.dataset.targetReplaceClass);
			$(this)[NAME](data);
		})
	});

	window.TargetReplaceClass = TargetReplaceClass;

}(window, document, jQuery));




