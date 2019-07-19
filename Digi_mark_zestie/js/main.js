$(document).ready(()=>{
    $line = $('.line-container');
    $mob_nav = $('#mi-main-mob-nav-list');
    // menu state
    state = false;
    $line.on('click', ()=>{
        if(!state){
            $mob_nav.addClass('show');
            $line.addClass('close');
            state = true;
        }else{
            $mob_nav.removeClass('show');
            $line.removeClass('close');
            state = false;
        } 
    });
    var rellax = new Rellax('.rellax', {
        speed: 5,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    //sphere
    var sphere = new Rellax('.rellax-sphere',{
        speed: 10,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    }) 
     //small-sphere
     var small_sphere = new Rellax('.rellax-small-sphere',{
        speed: 12,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    }) 
    //rellax-sec-small-sphere
    var sec_small_sphere = new Rellax('.rellax-sec-small-sphere',{
        speed: 13,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    //rellax-very-small-sphere
    var very_small_sphere = new Rellax('.rellax-very-small-sphere',{
        speed: 14,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    // smooth scroll
    $services = $('.services');
    $contact = $('.contact');
    $about = $('.about');
    // to service
    $services.on('click', (e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#services').offset().top
        }, 1000);
    });
    // to contact
    $contact.on('click', (e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
    });
    // to about
    $about.on('click', (e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000);
    });
});