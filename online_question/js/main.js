$currentdiv = $('#current');
$next = $('.next');
$(document).ready(() => {
    count = 1;
    $questions = $('.questions');
    for (i = 1; i <= $questions.length; i++) {
        $('.question-num').append("<li class='each-ques-num " + i + "' data-num=" + i + "  onClick='attribute(this)'>" + i + "</li>");
        // $questions.attr('data-quesnum', i);
    }
    for (j = 1; j <= $questions.length; j++) {
        $currentdiv.attr('data-qnum', j);
        $currentdiv = $currentdiv.next();
    }
    $current = $('#current')
    $next.on('click', (e) => {
        e.preventDefault();
        current_ques_num = $current.attr('data-qnum');
        current_name = $current.children().find('input').attr('name');

        if ($("input[name=" + current_name + "]").is(":checked")) {
            console.log($current.attr('data-qnum'))
            $("." + current_ques_num).addClass('green');
        }
        $current.toggleClass("hide");
        $current = $current.next();
        $current.toggleClass("hide");
        j = $current.attr('data-qnum');
        // console.log(j)
        if (j == $questions.length) {
            $next.css('display', 'none');
        } else {
            $next.css('display', 'block');
        }
    });

});
function attribute(data) {
    jumpnumber = $(data).data('num');
    initial_ques = 1
    current_ques_num = $('.active').attr('data-qnum');
    current_name = $current.children().find('input').attr('name');

    if ($("input[name=" + current_name + "]").is(":checked")) {
        $("." + current_ques_num).addClass('green');
    }
    $current.toggleClass('hide');
    $current.removeClass('active');

    while ($current.attr('data-qnum') != jumpnumber) {
        if ($current.attr('data-qnum') > jumpnumber) {
            $current = $current.prev();
        } else if ($current.attr('data-qnum') < jumpnumber) {
            $current = $current.next();
        } else {

        }

    }
    $current.toggleClass('hide');
    $current.addClass('active');
    j = $current.attr('data-qnum');
    // console.log(j)
    if (j == $questions.length) {
        $next.css('display', 'none');
    } else {
        $next.css('display', 'block');
    }
}