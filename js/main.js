$(document).ready(function () {

    //Nav links active
    $('.navbar-nav li').click(function () {
        $(this).find('.underlined').addClass('active');
        $(this).siblings().find('.underlined').removeClass('active');
    });

    //Scroll effect
    let scroll_start = 0;
    let transmutation = $('#features');
    let offset = transmutation.offset();
    if (transmutation.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-fixed-top").css('background-color', 'black');
            } else {
                $('.navbar-fixed-top').css('background-color', '#06a8ff');
            }
        });
    }

    //Hamburger toggle
    $('.hamburger').click(function () {
        $('.bar-1').toggleClass('open1');
        $('.bar-2').toggleClass('hidden');
        $('.bar-3').toggleClass('open2');
    });


    setInterval(function () {
        //Sales notification API call
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function (data) {
                $('.new-order').html("&#x1f4a5;  " + data.results[0].name.first + " from " + '<br>' + data.results[0].location.city);
            }
        });

        //Recent sale notification in/out
        $(".client-box").animate({
            width: "toggle"
        });

        $(".new-order").toggle();

    }, 6000);

});