$(document).ready(() => {
    count = 1;
    $questions = $('.questions');
    for (i = 1; i <= $questions.length; i++) {
        $('.question-num').append("<li class='each-ques-num' data-num=" + i + "  onClick='attribute(this)'>" + i + "</li>");
        // $questions.attr('data-quesnum', i);
    }
    $currentdiv = $('#current');
    for (j = 1; j <= $questions.length; j++) {
        $currentdiv.attr('data-qnum', j);
        $currentdiv = $currentdiv.next();
    }
    $next = $('.next');
    $current = $('#current')
    j = 1
    $next.on('click', (e) => {
        e.preventDefault();
        $current.toggleClass("hide");
        $current = $current.next();
        $current.toggleClass("hide");
        j = j + 1
        // console.log(j)
        if (j == $questions.length) {
            $next.css('display', 'none');
        }
    });

});
function attribute(data) {
    jumpnumber = $(data).data('num');
    console.log(jumpnumber);
    $current.toggleClass('hide');
    if ($current.attr('data-qnum') > jumpnumber) {
        inbetween = $current.attr('data-qnum') - jumpnumber;
        for (i = $current.attr('data-qnum'); i < jumpnumber; i++) {
            if ($('.each-ques-num').attr('data-num') == i) {
                $('.each-ques-num').addClass('yellow');
            }
            $('.each-ques-num').next();
        }

    } else {

    }
    while ($current.attr('data-qnum') != jumpnumber) {
        if ($current.attr('data-qnum') > jumpnumber) {
            $current = $current.prev();
        } else if ($current.attr('data-qnum') < jumpnumber) {
            $current = $current.next();

        } else {

        }

    }
    $current.toggleClass('hide');
}