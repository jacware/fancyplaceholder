/*
 *  fancyplaceholder 1.0.0 - jQuery plugin
 *
 *  Copyright (c) 2013 Aaron Cosentino
 *
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 */

(function( $ ) {
  $.fn.fancyplaceholder = function(options) {
    var options = $.extend({}, $.fn.fancyplaceholder.defaults, options);
    this.each(function() {
      var $this = $(this),
      inputId = (this.id) ? this.id : 'placeholder' + (Math.floor(Math.random() * 100000000)),
      placeholderText = $this.attr('placeholder'),
      placeholder = $('<label for='+ inputId +'>'+ placeholderText + '</label>');
      
      options.css['font'] = $this.css('font');
      options.css['left'] = $this.offset().left;
      options.css['position'] = 'absolute';
      options.css['display'] = 'block';
      
      placeholder.css(options.css);
      $this.attr('id', inputId).after(placeholder);
      placeholder.css('top',$this.position().top + $this.outerHeight())
      placeholder.hide();
      
      $this.focus(function(){
        placeholder.show();
        placeholder.css('top',$this.position().top + $this.outerHeight())
        placeholder.css('left',$this.offset().left)
      });
    
      $this.blur(function(){
        if (!$.trim($this.val()) || !options.keepLabels){
          placeholder.hide();
        };
      });
    });
  };
  $.fn.fancyplaceholder.defaults = {
    'css': {
      'color':'#000000', 
      'background-color': '#B3B3B3',
      'overflow': 'hidden',
      'border-radius': '0 0 3px 3px',
      'padding': '3px 8px 3px 8px',
      'z-index': '2147483647'
    },
    'keepLabels': false
  };
})( jQuery );
