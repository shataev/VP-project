$(document).ready(function () {
    $(".add-project__link").on('click', function (e) {
        e.preventDefault();
        $("#modal-window").bPopup();
    });

    $("#close-btn").on('click', function(){
        $("#modal-window").bPopup().close();

    })

});

