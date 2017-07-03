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
        
        wrapper.classList.toggle('wrapper--active')
        btn.classList.add('sm-visible--active-visible')
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
    $('#call-trigger').magnificPopup({
        
    })
    $("#form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            tel: {
                required: true
            },
            address: {
                required: true
            },
            select: {
                required: true
            }
        },
        messages: {
            name: {
                required: "",
                minlength: ""
            },
            tel: {
                required: "",
            },
            address: {
                required: "",
            }
        },

        submitHandler: function(form) {
            $.magnificPopup.open({
                items: {
                    src: '#thanks'
                },
                closeOnContentClick: true,
                closeOnBgClick: true,
                type: 'inline'
            });
        },


            
    });
    jQuery(function($) {
        $("#tel").mask("+38(099) 999-9999")
    });
    $('.image-link').magnificPopup({

            type: 'image',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }  
            }

        });

});


// $('.test-popup-link').magnificPopup({
//   type: 'image'
//   // other options
// });
// // $("#button").on("click", "a", function(event) {
// //         //отменяем стандартную обработку нажатия по ссылке
// //         event.preventDefault();

// //         //забираем идентификатор бока с атрибута href
// //         var id = $(this).attr('href'),

// //             //узнаем высоту от начала страницы до блока на который ссылается якорь
// //             top = $(id).offset().top;

// //         //анимируем переход на расстояние - top за 1500 мс
// //         $('body,html').animate({ scrollTop: top }, 1500);
// //     });
