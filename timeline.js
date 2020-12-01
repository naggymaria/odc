var num_children = $('#up-left').children().length;
var child_height = $('#up-left').height() / num_children;
var half_way = num_children * child_height / 2;
$(window).scrollTop(half_way);
var ul = '#up-left';
var dr = '#down-right';
function crisscross() {
    $(ul).css('bottom', '-' + window.scrollY + 'px');
    $(dr).css('bottom', '-' + window.scrollY + 'px');
    var ulc = $(ul).children();
    var drc = $(dr).children();
    var corners = [ulc.first(),ulc.last(),drc.last(),drc.first()];
    /*
    if (window.scrollY > half_way ) {
        $(window).scrollTop(half_way - child_height);
        corners[2].appendTo(ul);
        corners[0].prependTo(dr);
    } else if (window.scrollY < half_way - child_height) {
        $(window).scrollTop(half_way);
        corners[1].appendTo(dr);
        corners[3].prependTo(ul);
    }
    */
}
$(window).scroll(crisscross);