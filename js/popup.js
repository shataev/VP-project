$(document).ready(function () {
//Открытие модального окна для добавления проекта
    $(".add-project__link").on('click', function (e) {
        e.preventDefault();
        $("#modal-window").bPopup();
    });

    //Закрытие модального окна для добавления проекта
    $("#close-btn").on('click', function(){
        $("#modal-window").bPopup().close();

    });

    //Создаем тултипы
    var createTt = function(element){
        element.qtip({
            content: {
                text: element.attr('qtip-content')

            },
            style: {
                classes: 'qtip-red qtip-rounded'
            },
            position: {
                my: 'center right',
                at: 'center left'
            },
            show: {
                event: 'show'
            },
            hide: {
                event: 'hide'
            }
        }).trigger('show');
    };


    //Нажатие кнопки "Добавить"
    $('#add-proj-form').on('submit', function(e){
        e.preventDefault();

        var addForm = $("#add-proj-form");
        var elems = addForm.find('input, textarea, .fileform').not("input[type='file']");
        console.log(elems);
        $.each(elems, function(index,element){
            var elem = $(element);
            var val = elem.val();
            if (val.length == 0) {
                elem.addClass('empty-field');
                createTt(elem);

            }
        });
    });



});

