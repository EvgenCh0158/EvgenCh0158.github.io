$(document).ready(function() {
	/*var selectedAttr=$('[data-select].active');
	selectedActive(selectedAttr);*/
	$('[data-select]').on("click",function() {
		var selectedAttr=$(this);		// создаем переменную с выбранным элементом
		selectedActive(selectedAttr);	// вызываем функцию
		return false;
		});
	
	function selectedActive (elem) {	
		var selectedAttr=$(elem), 		// перезаписываем переменную с выбранным элементом
		selectionID="."+$(selectedAttr).data("select");	// записываем в новую переменную класс из названия ключа выбранного объекта

		$(".selecton a").removeClass("active");	// удаляем классы "active" у ссылок
		$(selectedAttr).addClass("active");	// добавляем класс "active" для выбранного элемента
		$(".food-menu").removeClass("active");	// удаляем классы "active" у блоков с ".food-menu"
		if (selectionID==".*") $(".food-menu").addClass("active"); // для всех блоков добавляем класс "active"
		else $(selectionID).addClass("active"); // для соответствующих блоков добавляем класс "active"
	}
	
	//	NavToggle
	
	let nav = $("#main-menu");
	let navToggle = $("#navToggle");
	
	$("#navToggle").on("click", function(event){
		nav.toggleClass("show");
	});
	
	// Smooth Scroll 
	
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();
		
		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;
		
		nav.toggleClass("show");
		
		$("html, body").animate({
			scrollTop: elementOffset
		}, 1000);
		
	});
	
	// Change size
	
    $(".link_mnu").each(function(i) {
		$(this).attr("href", "#tab" + i);	
	});
	 $(".content").each(function(i) {
		$(this).attr("id", "tab" + i);	
	});
	
    $(".tab_mnu li").click(function(e) {
        e.preventDefault();
        var tab = $(this).find("a").attr("href");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
       
        $(tab).siblings().not(tab).css({"display":"none"});
        $(tab).fadeIn(800);
	}); 
  

	//	Owl-carousel
	
  	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
    	responsive:{
        0:{
            items: 1
        },
        768:{
            items: 2
        },
        1200:{
            items: 3
        }
    }
});
	
	/* Fixed header */
	
	let header = $("#header");
	let intro = $(".main-slider");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	
	checkScroll(scrollPos, introH);
	
	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		
		checkScroll(scrollPos, introH);
		
	});
	
	function checkScroll(scrollPos, introH) {
		if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}
	
	// инициализация плагина добавления товаров в корзину
			$.jqCart({
					buttons: '.add_item',
					handler: './php/handler.php',
					cartLabel: '.label-place',
					visibleLabel: true,
					openByAdding: false,
					currency: 'грн.'
			});	
			/*
			// Пример с дополнительными методами
			$('#open').click(function(){
				$.jqCart('openCart'); // открыть корзину
			});
			$('#clear').click(function(){
				$.jqCart('clearCart'); // очистить корзину
			});	*/

    // Form question
    
    $("#submit").click(function() {
     var name = $('input[name=fio]').val();
     var tel = $('input[name=tel]').val();
     var theme = $('input[name=theme]').val();
     var question = $('textarea[name=question]').val();
        
     var otpravka = true;
     if(name=="") {
     otpravka = false;
     $("#form_result").fadeOut().html("Вы не указали ваше Имя").fadeIn();
     }
     if(tel=="") {
     otpravka = false;
     $("#form_result").fadeOut().html("Вы не указали ваш телефон").fadeIn();
     }
     if(theme=="") {
     otpravka = false;
     $("#form_result").fadeOut().html("Вы не указали тему сообщения").fadeIn();
     }
     if(question=="") {
     otpravka = false;
     $("#form_result").fadeOut().html("Вы ничего не указали в сообщении").fadeIn();
     } 
     
     if(otpravka)
     {

     dannie = {'polz_name':name, 'polz_tel':tel, 'polz_theme':theme, 'polz_question':question};
         
     $.post('senda.php', dannie, function(answer){
         rezultat = '<div style="color:#000;">'+answer.text+'</div>';
         $("#form_result").fadeOut().html(rezultat).fadeIn();
     }, 'json');
     }
});
	
	// Animated
	
	$(window).scroll(function() {
		$('.phone').each(function(){
		  var imagePos = $(this).offset().top;
		  var topOfWindow = $(window).scrollTop();
		  if (imagePos < topOfWindow+900) {
			$(this).addClass('fadeInRight');
		  }
		});
  	});
	$(window).scroll(function() {
		$('.fio').each(function(){
		  var imagePos = $(this).offset().top;
		  var topOfWindow = $(window).scrollTop();
		  if (imagePos < topOfWindow+900) {
			$(this).addClass('fadeInLeft');
		  }
		});
  	});
	$(window).scroll(function() {
		$('.theme').each(function(){
		  var imagePos = $(this).offset().top;
		  var topOfWindow = $(window).scrollTop();
		  if (imagePos < topOfWindow+950) {
			$(this).addClass('fadeInUp');
		  }
		});
  	});
	$(window).scroll(function() {
		$('.question').each(function(){
		  var imagePos = $(this).offset().top;
		  var topOfWindow = $(window).scrollTop();
		  if (imagePos < topOfWindow+950) {
			$(this).addClass('fadeInUp');
		  }
		});
  	});
	
});