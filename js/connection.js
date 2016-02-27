/**
 * Created by Кира on 10.02.2016.
 */
/*var connectWitnMe = (function () {

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
*/


var connectWithMe = (function() {
	var $form = $('#connect-with-me');
	var elems = $form.find('input, textarea');

	var handlers = function () {
		$form.on('submit', function(e){
			e.preventDefault();
			validate();
		});

		$form.on('reset', function(e){
			clearFields();
			$('.qtip').remove();
		});

		$form.on('click', function(e){
			var $target = $(e.target);
			if ($target.hasClass('empty-field')){
				$target.removeClass('empty-field');
			}
		})
	};

	var validate = function($form){
		elems.each(function(elem){
			if ($(this).val() == 0) {
				console.log('empty field');
				$(this).addClass('empty-field');
				createTt($(this));
			}
		})
	};

	var createTt = function(element){
		var position = element.attr('qtip-position');
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
				event: 'keydown click'
			}

		}).trigger('show');
	};

	var clearFields = function(element) {
		elems.each(function(elem){
			$(this).removeClass('empty-field');
		})
	};

	return {
		formIt : handlers,
	}

})();

connectWithMe.formIt();