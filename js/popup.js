$(document).ready(function () {
//Открытие модального окна для добавления проекта
    $(".add-project__link").on('click', function (e) {
        e.preventDefault();
        $("#modal-window").bPopup();
    });

//Закрытие модального окна для добавления проекта
    var closeWnd = function () {
        $("#modal-window").bPopup().close();
        removeTt();
        console.log("closed");
    };

     var addForm = $("#add-proj-form");
     var elems = addForm.find('input, textarea, .fileform').not("input[type='file']");


    //Создаем тултипы
    var createTt = function (element, position) {

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
                event: 'keydown removeTt click'
            }

        }).trigger('show');
    };


     //Убираем тултипы и класс empty-field
     var removeTt = function (){
     addForm.find('input, textarea, .fileform').removeClass('empty-field');
     $(".qtip").remove();
     console.log("убрал классы");
     };




     //Нажатие кнопки "Добавить"
     addForm.on('submit', function(e){
     e.preventDefault();
     console.log("нажал добавить");
     $.each(elems, function(index,element){
     var elem = $(element);
     var val = elem.val();
     if (!val.length) {
     elem.addClass('empty-field');
     createTt(elem);
     }
     });
     });



     $("#close-btn").on('click', closeWnd);



});

