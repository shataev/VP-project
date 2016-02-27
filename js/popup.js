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
    var elems = addForm.find('input, textarea').not("input[type='file']");
    var fileform = $('.fileform');
    var uploadImg = $('.upload-img__placeholder');

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
        if (uploadImg.text() == 0 || uploadImg.text() == "Загрузите" +
            " изображение") {
            fileform.addClass('empty-field');
            createTt(fileform);
        };
        if (uploadImg.text() !== 0 && uploadImg.text() !== "Загрузите" +
            " изображение") {
            fileform.removeClass('empty-field');
            fileform.qtip().hide();
        };
	});

	//Нажатие кнопки "Закрыть"
    $("#close-btn").on('click', closeWnd);

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
         uploadImg.text('Загрузите изображение');
     };

    //Вывод имени загруженного файла

    var printName = function() {
        var $file = $('#upload-img-edit');
        var fileName = $file.val();
        if (fileName) {
            uploadImg.text(fileName);
        } else {
            uploadImg.text('Загрузите изображение');
        }
    };

    $('#upload-img-edit').on('change', printName);
});

