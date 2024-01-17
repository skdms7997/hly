jQuery(document).ready(function(){
    $('.bn .images').slick({
        'nextArrow' : '.right',
        'prevArrow' : '.left',
        'autoplay' : true,
        'autoplaySpeed' : 2000,
    });

    $('.s1 .row').slick({
        'nextArrow' : '.prev',
        'prevArrow' : '.next',
        'autoplay' : true,
        'autoplaySpeed' : 2000,
        'slidesToShow' : 3
    });

    $('.s3 .row2').slick({
        'nextArrow' : '.rt',
        'prevArrow' : '.lt',
        'autoplay' : true,
        'autoplaySpeed' : 2000,
        'slidesToShow' : 4
       });
    

});