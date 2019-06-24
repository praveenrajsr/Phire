$currentdiv = $('#current');
$next = $('.next');
$(document).ready(() => {
    count = 1;
    $questions = $('.questions');
    for (i = 1; i <= $questions.length; i++) {
        $('.question-num').append("<li class='question-numbers each-ques-num " + i + "' data-num=" + i + "  onClick='attribute(this)'>" + i + "</li>");
        // $questions.attr('data-quesnum', i);
    }
    for (j = 1; j <= $questions.length; j++) {
        $currentdiv.attr('data-qnum', j);
        $currentdiv = $currentdiv.next();
    }
    $current = $('#current');
    init_div = $('.active').children().find('input').attr('name');
    $next.on('click', (e) => {
        e.preventDefault();
        current_ques_num = $current.attr('data-qnum');
        current_name = $current.children().find('input').attr('name');

        if ($("input[name=" + current_name + "]").is(":checked")) {
            // console.log($current.attr('data-qnum'))
            $("." + current_ques_num).removeClass('red');
            $("." + current_ques_num).addClass('green');
        } else {
            $("." + current_ques_num).addClass('red');
        }
        $current.toggleClass("hide");
        $current.toggleClass('active');
        $current = $current.next();
        $current.toggleClass('active');
        $current.toggleClass("hide");
        j = $current.attr('data-qnum');
        // console.log(j)
        if (j == $questions.length) {
            $next.css('display', 'none');
        } else {
            $next.css('display', 'block');
        }
    });
    $clear_res = $('.clear');
    current_name = $current.children().find('input').attr('name');
    $clear_res.on('click', (e) => {
        e.preventDefault();
        $("input[name=" + current_name + "]").prop('checked', false);
    });

    // current_name = $current.children().find('input').attr('name');
    // current_ques_num = $('.active').attr('data-qnum');
    // console.log(current_name + current_ques_num)
    // $("input[name="+ current_name +"]").on('change', ()=>{
    //     $("." + current_ques_num).addClass('green');
    // });
    $submit_btn = $('#submit-btn');
    $yes_btn = $('#yes-btn');
    $no_btn = $('#no-btn');
    $popup = $('#popup');
    $timeout = $('#timeout-div');

    $submit_btn.on('click', (e) => {
        e.preventDefault();
        $popup.removeClass('hide');
    });
    $no_btn.on('click', (e) => {
        e.preventDefault();
        $popup.addClass('hide');
    });
    // console.log(init_div)
    // $("input[name =" + init_div + " ]").change(() => {
    //     init_num = $('.active').attr('data-qnum');
    //     console.log(init_num);
    //     if ($(this).prop('checked', true)) {
    //         $("." + init_num).removeClass('red');
    //         $("." + init_num).addClass('green');
    //     } else {
    //         $("." + init_num).addClass('red');
    //     }
    // });
});
function attribute(data) {
    jumpnumber = $(data).data('num');
    current_ques_num = $('.active').attr('data-qnum');
    current_name = $current.children().find('input').attr('name');
    // console.log(current_ques_num);
    if ($("input[name=" + current_name + "]").is(":checked")) {
        $("." + current_ques_num).removeClass('red');
        $("." + current_ques_num).addClass('green');
    } else {
        $("." + current_ques_num).addClass('red');
    }
    $current.toggleClass('hide');
    $current.removeClass('active');

    while ($current.attr('data-qnum') != jumpnumber) {
        if ($current.attr('data-qnum') > jumpnumber) {
            $current = $current.prev();
            current_name = $current.children().find('input').attr('name');
            $current_div = $current.attr('data-qnum');
            // console.log(current_name + $current_div);
            // $current_div = $current_div - 1;
            if ($("input[name=" + current_name + "]").prop("checked") == false) {
                $("." + $current_div).addClass('yellow');
            }

        } else if ($current.attr('data-qnum') < jumpnumber) {
            $current = $current.next();
            current_name = $current.children().find('input').attr('name');
            $current_div = $current.attr('data-qnum');
            // console.log(current_name + $current_div)
            $current_div = $current_div - 1;
            if ($("input[name=" + current_name + "]").prop("checked") == false) {
                $("." + $current_div).addClass('yellow');
            }
        } else {

        }

    }
    $current.toggleClass('hide');
    $current.toggleClass('active');
    j = $current.attr('data-qnum');
    // console.log(j)
    if (j == $questions.length) {
        $next.css('display', 'none');
    } else {
        $next.css('display', 'block');
    }
}
function change(attribute) {
    ques_num = $("input[name=" + attribute + "]").closest("div").attr('data-qnum');
    console.log(ques_num)
    $("." + ques_num).removeClass('red');
    $("." + ques_num).addClass('green');
}