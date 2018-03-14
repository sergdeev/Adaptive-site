// (function($){
//
// 	$.fn.scrollPlugin = function(options){ //fn - позволяет запускать нашу функцию, как нативную функцию jQuery
//
// 		var options = $.extend({ // extend - совмещает 2 объекта. принимает 2 параметра ( 1 - текущий ( дефолтный ) объект, 2 - то, с чем нужно совместить/добавить )
// 			speed: 300
// 		}, options);
//
// 		var links = this;
//
//
// 		var make = function(){
// 			$(this).click(function( e ){
// 				$(links).removeClass('is-active');
// 				$(this).addClass('is-active');
// 				e.preventDefault();
// 				var section = $(this).attr('href');
// 				var top = $(section).offset().top;
// 				$('body, html').animate({
// 					scrollTop: top
// 				}, options.speed)
// 			})
// 		};
//
// 		return this.each(make) // this - возвращает то, к чему применяется функция testPlug ( см. index.html )
// 	}
//
// }(jQuery))


;(function($){

	$.fn.scrollPlugin = function( options ){
		var options = $.extend({
			speed: 600
		}, options)
		var make = function(){
			$(this).click(function( e ){
				var section, top;
				e.preventDefault();
				section = $(this).attr('href');
				top = $(section).offset().top;
				$('body, html').animate({
					scrollTop: top
				}, options.speed)
			})
		}

		this.each( make );
	}
}(jQuery));





























// !!!!!!!
