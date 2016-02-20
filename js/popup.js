$(document).ready(function () {
//Открытие модального окна для добавления проекта
    $(".add-project__link").on('click', function (e) {
        e.preventDefault();
        $("#modal-window").bPopup({
	        onClose: function() { removeTt(); $("form")[0].reset();}
        });
    });


	//Закрытие модального окна для добавления проекта
    var closeWnd = function () {
        removeTt();
        $("form")[0].reset();
        $("#modal-window").bPopup().close();
    };


	var addForm = $("#add-proj-form");
    var elems = addForm.find('input, textarea, .fileform').not("input[type='file']");

	//Нажатие кнопки "Добавить"
	addForm.on('submit', function(e){
		e.preventDefault();
		$.each(elems, function(index,element){
			var elem = $(element);
			var val = elem.val();
			if (!val.length) {
				elem.addClass('empty-field');
				createTt(elem);
			}
		});
	});
	//Нажатие кнопки "Закрыть"
    $("#close-btn").on('click', closeWnd);

	//События при закрытии модального окна


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
         $("form")[0].reset();
     };





});

