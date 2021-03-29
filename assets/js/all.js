// animated-fadeIn
$(document).ready(function () {
    // index
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        $('.animated').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });
    });



    // cart - modal
    $('[data-toggle="tooltip"]').tooltip()
    $('#removeModal').on('show.bs.modal', function (event) {
        var btn = $(event.relatedTarget) // Button that triggered the modal
        var title = btn.data('title') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        modal.find('.modal-title').text(title);
        // modal.find('.modal-body input').val(recipient)
    })


    // login - form
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

});