var ul = '#up-left';
var dr = '#down-right';

$(window).scroll(dualScroll);

function dualScroll(){
      var sh = $(ul).height() - window.innerHeight;
  
      if ( $(window).scrollTop() >= sh ) {
        $(window).scrollTop(1);
  
      }
      else if ( $(window).scrollTop() == 0 ) {
        $(window).scrollTop(sh - 1);
      }
  
      $(dr).css({"transform": "translate3d(0, " + ((((sh) - $(window).scrollTop())* -1)) + "px, 0)"});
  }

 /* function dualScrollAnimated(){
    var sh = $(ul).height() - window.innerHeight;

    if ( $(window).scrollTop() >= sh ) {
      $(window).animate({scrollTop: $(window).scrollTop(1)}, 3000);
    }
    else if ( $(window).scrollTop() == 0 ) {
      $(window).animate({scrollTop: $(window).scrollTop(sh - 1)}, 3000);
    }

    $(dr).css({"transform": "translate3d(0, " + ((((sh) - $(window).scrollTop())* -1)) + "px, 0)"});
  }*/