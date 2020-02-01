$(function() {
	$('.people__img1').mouseenter(function(){
	  $('.profession__position').html('Jon Doe / CEO of LoremIpsum').animate({
		      opacity: 1, // прозрачность элемента
		      fontSize: "14px", // размер шрифта элемента  
	    });
	});
		$('.people__img1').mouseleave(function(){   
		$('.profession__position').animate({  
		      opacity: 0, // прозрачность элемента
		      fontSize: "0", // размер шрифта элемента 
	    });
	});


	$('.people__img2').mouseenter(function(){
	    $('.profession__position').html('Nick Brown / Designer').animate({  
		      opacity: 1, // прозрачность элемента
		      fontSize: "14px", // размер шрифта элемента     
	    });
	}); 
	    $('.people__img2').mouseleave(function(){   
		$('.profession__position').animate({  
		      opacity: 0, // прозрачность элемента
		      fontSize: "0", // размер шрифта элемента 
	    });
	});


	$('.people__img3').mouseenter(function(){
	    $('.profession__position').html('Bob Swansey / Web Developer').animate({  
		      opacity: 1, // прозрачность элемента
		      fontSize: "14px", // размер шрифта элемента     
	    });
	}); 
	    $('.people__img3').mouseleave(function(){   
		$('.profession__position').animate({  
		      opacity: 0, // прозрачность элемента
		      fontSize: "0", // размер шрифта элемента 
	    });   	
	});
	
	//	navToggle
	
	let nav = $("#logo__links");
	let navToggle = $("#navToggle");
	
	$("#navToggle").on("click", function(event){
		event.preventDefault();
		
		nav.toggleClass("show");
	});
	
});
