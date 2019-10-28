$(document).ready(function() {

  const players = Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p));




  $("header, main, footer,.grid_item").addClass("hidden");

  function removeLoader() {
      $(".loader").removeClass("on");
  }
  setTimeout(removeLoader, 2500);

  function showPage() {
      $("body *").removeClass("hidden");
  }
  setTimeout(showPage, 3000);




  // CURSOR

  function cursor() {

  	document.body.style.cursor = 'none';
  	/* why we do this here and not in css?
  	 * If the user dosn't have javascript onboard he
  	 * don't see any cursor by default and that's shit
  	 */

  	var cursor = document.createElement( 'div' );
  	cursor.classList.add( 'cursor' );
  	document.body.appendChild( cursor );

  	var follow = document.createElement( 'div' );
  	follow.classList.add( 'follow' );
  	document.body.appendChild( follow );

  	function move( obj, event ) {
  	    obj.style = '';
  	    obj.style.top = event.clientY + 'px';
  	    obj.style.left = event.clientX + 'px';
  	}

  	if ( cursor ) {
  	    window.addEventListener( 'mousemove', function( event ) {

  	        // legend ;)
  	        var e = event;
  	        var t = e.target;
  	        var f = follow;
  	        var c = cursor;

  	        // rambazamba
  	        if ( (t == $('.link')) || (t == $('p a')) ) {
  	            // c.style.backgroundColor = 'transparent';

  	            // f.style.top = t.offsetTop + 'px';
  	            // f.style.left = t.offsetLeft + 'px';
  	            // f.style.width = t.clientWidth + 'px';
  	            // f.style.height = t.clientHeight + 'px';

  	            // if ( t.classList.contains( 'button--round' ) )
  	            //     f.style.borderRadius = '50%';

  	            var aEl = $(t)

  				var offset = $(aEl).offset();
  				var width = $(aEl).width();
  				var height = $(aEl).height();

  				var centerX = offset.left + width / 2;
  				var centerY = offset.top + height / 2;

  	            $( f, c ).css({
  	            	'top' : centerY,
  	            	'left' : centerX
  	            });


  	            $( f, c ).addClass( 'on_hover' );

  	        }


  	        //if ( t.tagName == 'A' )


  	        else {
  	            move( c, e );
  	            move( f, e );
  	            //$(f).removeClass( 'on_hover' );
  	        }
  	    });
  	}

  	$('a, .grid_item').mouseenter( function() {
  		$( '.follow').addClass( 'on_hover' );
  		$( '.cursor').addClass( 'on_hover' );
  	});

  	$('a, .grid_item').mouseleave( function() {
  		$( '.cursor').removeClass( 'on_hover' );
  		$( '.follow').removeClass( 'on_hover' );
  	});

  	$(document).on('mousemove', function(e){
  	    $(cursor).css({
  	        left:  e.pageX,
  	        top:   e.pageY - $('body').scrollTop()
  	    });
  	});

  };

  cursor();


});
