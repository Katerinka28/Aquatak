function initMap() {
    var uluru = { lat: 50.1480734, lng: 30.7377915 };
    var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false,
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    google.maps.event.addListener(map, 'click', function(event) {
        if (this.get('scrollwheel') === false) {
            this.setOptions({
                scrollwheel: true
            });

        } else {

            this.setOptions({
                scrollwheel: false
            });
        }
    });
}



$(document).ready(function() {
    $('.header__mob-icon').click(function(e) {
        $('.header__mobile').toggleClass('is-mobile-header');
        $('body').toggleClass('load');
    });
    $('.header__mob-close').click(function(e) {
        $('.header__mobile').removeClass('is-mobile-header');
        $('body').removeClass('load');
    });
    $("#menu").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    $("#menu-mob").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    $("#menu-footer").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    const wrapper = $('body')[0];
    const btn = $('.header__mob-icon')[0];
    const drawer = $('.header__mobile')[0];

    btn.addEventListener('click', function(e) {
        console.log(1)
        // wrapper.classList.toggle('wrapper--active');
        // btn1.classList.add('sm-visible--active-visible')
        drawer.classList.add('is-mobile-header');
        e.stopPropagation();
    });

    wrapper.addEventListener('click', checkEvent);
    wrapper.addEventListener('touchmove', checkEvent);
    drawer.addEventListener('touchmove', checkEvent);
    // sidebar handle
    function checkEvent(e) {
        console.log()
        if (drawer.classList.contains('is-mobile-header')) {
            const target = e.target;
            if (target === drawer || drawer.contains(target)) {
                return false
            }
            drawer.classList.remove('is-mobile-header');
            btn.classList.add('sm-visible--active');
            btn.classList.remove('sm-visible--active-visible')
        }
        e.stopPropagation()
    }
});



// $("#button").on("click", "a", function(event) {
//         //отменяем стандартную обработку нажатия по ссылке
//         event.preventDefault();

//         //забираем идентификатор бока с атрибута href
//         var id = $(this).attr('href'),

//             //узнаем высоту от начала страницы до блока на который ссылается якорь
//             top = $(id).offset().top;

//         //анимируем переход на расстояние - top за 1500 мс
//         $('body,html').animate({ scrollTop: top }, 1500);
//     });