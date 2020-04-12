<template>
    <CWrapper>
      <Header/>
      <router-view></router-view>
      <Footer/>
      <CopyrightPart/>
    </CWrapper>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import CopyrightPart from './CopyrightPart'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    CopyrightPart
  },
  created(){
    jQuery(window).on('scroll', function (event) {
            var $header =jQuery("header");
            var scrollValue = jQuery(window).scrollTop();

            if (scrollValue > 1) {
              $header.addClass('affix').removeClass('affix-top');
            } else {
              $header.addClass('affix-top').removeClass('affix');
            }
        });
         $(document).ready(function(){
       // dropdown menu
      if($(".mobile-menu-dropdown dropdown").length){
        $('.mobile-menu-dropdown .dropdown').each(function(){
          var $self = $(this);
          var handle = $self.children('[data-toggle="dropdown"]');
          $(handle).click(function(){
            var submenu = $self.children('.dropdown-menu');
            $(submenu).toggle();
            return false;
          });
        });
      }

      $(document).click(function(event) {
        $(event.target).closest(".navbar").length || $(".navbar-collapse.show").length && $(".navbar-collapse.show").collapse("hide")
      });

      $(document).on('click', '.desktop-menu-dropdown li.dropdown a[data-toggle="dropdown"]', function(e){
        window.location.href = $(this).attr('href');
      });
    })

$(document).on({
		mouseenter: function(){
			var elm = $('ul:first', this);
			var off = elm.offset();

			if(typeof off != "undefined"){
				var l = off.left;
				var w = elm.width();
				var docW = $("body").outerWidth(true);

				var isEntirelyVisible = (l+ w <= docW);

				if ( ! isEntirelyVisible ) {
					$(this).addClass('other_side');
				}
			}
		},

		mouseleave: function(){
			if($(this).hasClass('other_side')){
				$(this).removeClass('other_side');
			}
		}
	}, ".dropdown li");

  $.fn.evenElements = function() {
		var heights  = [];

		$(this).removeAttr("style").height('auto');

		this.each( function() {
			if($(this).css('transition-duration')){
				transition_duration = (typeof transition_duration == "undefined" ? $(this).css('transition-duration') : transition_duration);
				$(this).css('transition-duration', '0s');
			}

			var height = $(this).height('auto').outerHeight();

			heights.push(height);
		});

		var largest = Math.max.apply(Math, heights);

		return this.each(function() {
            $(this).height(largest);

			$(this).css('transition-duration', transition_duration);
        });
	}

	jQuery.fn.extend({
	  	renameAttr: function( name, newName, removeData ) {
			var val;
			return this.each(function() {
			  	val = jQuery.attr( this, name );
		  		jQuery.attr( this, newName, val );
		  		jQuery.removeAttr( this, name );
		  		// remove original data
		  		if (removeData !== false){
					jQuery.removeData( this, name.replace('data-','') );
		  		}
			});
	  	}
	});

	
	

	// if wow exists
	if(typeof WOW == 'function'){
		WOW = new WOW({
				boxClass: 'scroll_effect',
				offset: 15
			});

		WOW.init();
	}

	

	$('ul.navbar-nav .dropdown .dropdown').each(function () {
		var $self = $(this);
		var handle = $self.children('[data-toggle="dropdown"]');

		$(handle).on("click touchstart", function () {
			var submenu = $self.children('.dropdown-menu').eq(0);
			$(submenu).toggle();

			return false;
		});
	});
  

      }
   
     
  }
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
