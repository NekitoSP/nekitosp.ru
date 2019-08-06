/**
 * Created by NekitoSP on 16.08.2015.
 */

(function () {
    "use strict";

    function toggleModal(existModal, newModal, newIsNext) {
        var thisClass = 'left';
        var nextClass = 'right';
        if (newIsNext) {
            thisClass = 'right';
            nextClass = 'left';
        }
        $(existModal).removeClass('right').removeClass('left');
        $(newModal).removeClass('right').removeClass('left');
        $(existModal).addClass(thisClass);
        $(newModal).addClass(nextClass);
        $(existModal).modal('hide');
        $(newModal).modal('show');
    }

    function renderEmail() {
        var a     = "gmail.com";
        var b     = "nekitosp";
        var email = b + "@" + a;
        $('#email').html(email).attr('href', 'mailto:' + email);
    }

    $(document).ready(function () {
        renderEmail();

        $('body').on('keyup', function (e) {
            //right = 39;
            //left = 37
            console.log(1);
            if (e.which == 39) {
                console.log('r');
                $('.modal.in .navigate-right').click();
            }

            if (e.which == 37) {
                console.log('l');
                $('.modal.in .navigate-left').click();
            }
        });

        $('.modal').on('shown.bs.modal', function (e) {
            $(this).removeClass('right').removeClass('left');
        }).on('hidden.bs.modal', function (e) {
            $(this).removeClass('right').removeClass('left');
        });

        $("[data-toggle='modal']").each(function (i, item) {
            var modalId = $(item).data('target');
            var modal   = $(modalId);
            var next    = $(item).next("[data-toggle='modal']");
            var prev    = $(item).prev("[data-toggle='modal']");

            if (next.length) {
                var nextModal = $(next).data('target');
                $(modal).find('.navigate-right').click(function () {
                    toggleModal(modal, nextModal, true)
                });
            } else {
                $(modal).find('.navigate-right').hide();
            }

            if (prev.length) {
                var prevModal = $(prev).data('target');
                $(modal).find('.navigate-left').click(function () {
                    toggleModal(modal, prevModal, false)
                });
            } else {
                $(modal).find('.navigate-left').hide();
            }
        });
    });

})();
