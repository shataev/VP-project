/**
 * Created by Кира on 10.02.2016.
 */
var connectWitnMe = (function () {

    //Инициализирует наш модуль
    var init = function () {
        _setupListeners();
    };

    //Прослушивает события
    var _setupListeners = function () {
        $("#connect-with-me").on('submit', _submitForm);
        $("#connect-with-me").on('reset', _resetForm);

    };

    var _submitForm = function(e) {
        e.preventDefault();
        var form = $(this);
        var url = 'connection.php';
        var defObj = _ajaxForm(form, url);
        //ЧТо-то делаем с ответом с сервера defObj
    };

    var _resetForm = function() {
        var addForm = $("#connect-with-me");
        var elems = addForm.find('input, textarea, .fileform').not(".captcha__area");
        $.each(elems, function (index, val) {
            var element = $(val);
            var val = element.val();
            $(".qtip").remove();
            element.removeClass("empty-field");
        })
    };

    var _ajaxForm = function(form, url) {
        if(!validation.validateForm(form)) return false;
    };

    //Возвращаем объект (публичные методы)
    return {
        init: init
    };

})();

connectWitnMe.init();
