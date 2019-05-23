$(document).ready(()=>{
    
    $termsandconditions = $('.termsandconditionswrapper');
    $question_container = $('#fullcontainer');
    $('#fullcontainer').hide();
    $('#next-btn').on('click', ()=>{
        $termsandconditions.toggleClass('hide');
        $('#fullcontainer').show();
        $('#time-section').timeTo(2400, function(){
            alert("Count down Finished!");
        });  
    });   
    $currentdiv = $('#start');
    $submit_btn = $('#submit-btn');
    if($currentdiv.attr('data-order') == 1){
        $('.previous-btn').addClass('hide');
    }else{
        $('.previous-btn').removeClass('hide');
    }
    $('.next-btn').on('click', (e)=>{
        e.preventDefault();
        $currentdiv.toggleClass('hide');
        $currentdiv = $currentdiv.next()
        ;
        $currentdiv.toggleClass('hide');
        if($currentdiv.attr('data-order') == 3){
            $('.next-btn').addClass('hide');
        }else{
            $('.next-btn').removeClass('hide');
        }
        if($currentdiv.attr('data-order') == 1){
            $('.previous-btn').addClass('hide');
        }else{
            $('.previous-btn').removeClass('hide');
        }
        if($currentdiv.attr('data-order') == 3){
            $submit_btn.removeClass('hide')
        }
    });
    $('.previous-btn').on('click', (e)=>{
       e.preventDefault();
       $currentdiv.toggleClass('hide');
       $currentdiv = $currentdiv.prev();
       $currentdiv.toggleClass('hide');
       if($currentdiv.attr('data-order') == 3){
            $('.next-btn').addClass('hide');
        }else{
            $('.next-btn').removeClass('hide');
        }
       if($currentdiv.attr('data-order') == 1){
            $('.previous-btn').addClass('hide');
        }else{
            $('.previous-btn').removeClass('hide');
        }
        if($currentdiv.attr('data-order') == 3){
            $submit_btn.removeClass('hide')
        }
    });
    $submit_btn.on('click',()=>{
        alert("Thank you for submitting!");
    })
});