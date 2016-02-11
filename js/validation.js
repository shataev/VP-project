var validation = (function () {

    //Инициализирует наш модуль
    var init = function () {
        _setupListeners();
    };

    //Прослушивает события
    var _setupListeners = function () {
        $("form").on('click', '.empty-field', _clearField)
    };

    _clearField = function() {
        $(this).removeClass('empty-field');
        console.log("pressed");
    };

    //Создаем тултипы
    var createTt = function (element, position) {
        if (!position) {
            position = "left";
        }   else {
            if (position === "right") {
                position = {
                    my: 'center left',
                    at: 'center right'
                }
            } else {
                position = {
                    my: 'center right',
                    at: 'center left',
                    adjust: {
                        method: "shift none"
                    }
                }
            }
        }
        element.qtip({
            content: {
                text: element.attr('qtip-content')

            },
            style: {
                classes: 'qtip-red qtip-rounded'
            },
            position: position,

            show: {
                event: 'show'
            },
            hide: {
                event: 'keydown removeTooltip click'
            }

        }).trigger('show');
    };

    //Проверяем форму
    var validateForm = function (form) {
        var addForm = $("#connect-with-me");
        var elems = addForm.find('input, textarea, .fileform').not(".captcha__area");
        var valid = true;
        $.each(elems, function (index, val) {
            var element = $(val);
            var val = element.val();
            var position = element.attr('qtip-position');
            if (!val.length) {
                createTt(element, position);
                element.addClass("empty-field");
            }
        });
    };



    //Возвращаем объект (публичные методы)
    return {
        init: init,
        validateForm: validateForm
    };

})();

validation.init();
