function loading() {
    // Anime loading 動畫
    let animation = anime.timeline({
            loop: true
        })
        .add({
            targets: '.loading__line--top',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeInOutSine",
            duration: 100
        })
        .add({
            targets: '.loading__line--left',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeInOutSine",
            duration: 100
        })
        .add({
            targets: '.loading__line--bottom',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeInOutSine",
            duration: 100
        })
        .add({
            targets: '.loading__line--right',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeInOutSine",
            duration: 100
        })
        .add({
            targets: '.loading__img',
            translateX: ["1em", 0],
            opacity: [0, 1],
            easing: "easeInOutSine",
            duration: 400
        })

    $(window).on('load', function () {

        // Loading 畫面消失
        $('.loading').addClass('loading--fadeOut');

        // Anime 停止
        animation.pause();

        // 動態滑入顯示
        $(window).scroll(function () {
            let scrollPos = $(window).scrollTop();
            let windowHeight = $(window).height();

            $('.animated').each(function () {
                let thisPos = $(this).offset().top;
                if ((windowHeight + scrollPos) >= thisPos) {
                    $(this).addClass('fadeIn');
                }
            });
        });

    });
}


$(document).ready(function () {
    // 載入 Laoding
    loading();

    // cart.html > modal
    $('[data-toggle="tooltip"]').tooltip()
    $('#removeModal').on('show.bs.modal', function (event) {
        let btn = $(event.relatedTarget)
        let title = btn.data('title') 
        let modal = $(this);
        modal.find('.modal-title').text(title);
    })

    // login.html > form
    const forms = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

});