$(document).ready(function() {

	$('.slider-catalog').slick({
		arrows: true,
		// infinite: true,
		// mobileFirst: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		responsive: [
			// {
			//   breakpoint: 960,
			//   settings: {
			// 	slidesToShow: 3,
			// 	slidesToScroll: 3,
			//   }
			// },
			{
			  breakpoint: 640,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				// centerMode: true
			  }
			},
			{
			  breakpoint: 450,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				// centerMode: true
			  }
			}
		  ]
  	
		});
		$('.slider-comments').slick({
			arrows: true,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			speed: 1000,
			responsive: [
				{
					breakpoint: 800,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// centerMode: true
					}
				}
				]
			
			});


	$('.menu-btn').click(function(){
		$(this).toggleClass('open');
		$(this).next('ul.menu').toggleClass('open');
	});

$('.phone, .phone-close').click(function(){
		$('#phone').toggleClass('open');
	});	
	
	// $('.shopping-cart').click(function(){
	// 	$('.black-fill, .modal-window').toggleClass('show');
	// });
	$('.black-fill').click(function() {
		$('.modal-window').removeClass('show');
		$('.black-fill').toggleClass('show');
	});


	$('.see-more').click(function() {
		$('.wrap-filter__more').toggleClass('show');
	});

	$('.filter').click(function() {
		$('.wrap-filter').toggleClass('show');
	});



	$('.spinner').each(function() {  
    
		var spinner = $(this),
				input = spinner.find('input[type="text"]'),
				btnUp = spinner.find('.up'),
				btnDown = spinner.find('.down'),
				// options
				step = input.data('step'),
				min = input.data('min'),
				max = input.data('max');
				
		//input.val(min);
		
		btnUp.click(function(){
			input.val() >= max ? $(this).prop("disabled",true) : input.val((input.val()*1) + step);
			input.trigger('change');
			input.change();
			
	 });
		
		btnDown.click(function(){
			input.val() <= min ? $(this).prop("disabled",true) : input.val((input.val()*1) - step);
            input.trigger('change');
            input.change();
		 });
			
		});



		$('.gruop-radio input').styler();


		$('.clearance-order__guest_button').click(function() {
			$('.clearance-order__guest').hide();
			$('.clearance-order__delivery_form, .clearance-order__guest-full').show();
		});
		$('.clearance-order__delivery_button').click(function() {
			var inputs = [];
			$(this).parents('form').find('label.necessary + *').each(function(){
				if($(this).val().length == 0) {
                    inputs.push($(this).val());
                }
			});
			console.log(inputs.length);
			if(inputs.length){
				alert('Заполните объязательные поля');
			} else {
                $('.clearance-order__delivery').hide();
                $('.clearance-order__form, .clearance-order__delivery-full').show();
            }
		});

		$('.change-guest-form').click(function() {
			$('.clearance-order__guest-full').hide();
			$('.clearance-order__guest').show();
			$('.clearance-order__delivery_form').hide();
		});
		$('.change-delivery-form').click(function() {
			$('.clearance-order__delivery-full').hide();
			$('.clearance-order__delivery').show();
			$('.clearance-order__form').hide();
		});

		$('.checkout-cart .spinner input').on('change', function(){
			$(this).parents('form').submit();
		});

		$('.show-coupon').click(function(e){
			e.preventDefault();
			$('.label-code').show();
			$('.code-block').css('display', 'flex');
		});

		$('.next-check-step').click(function(){
			var usrEmail = $('#usermail').val();
			$('.guest-mail').text(usrEmail);
			$('#input-payment-email').val(usrEmail);
		});


		//menu
		$('.menu-item').click(function() {
			$(this).find('.wrapper-menu').toggleClass('open');
			$(this).toggleClass('red');
		});

		$('.menu-btn').on('click', function() {
			$(this).toggleClass('menu-btn_active');
			$('.menu').toggleClass('menu_active');
		});

		//carts
		$('.carts').click(function() {
			$('.carts-dropdown').toggleClass('open');
		});
});