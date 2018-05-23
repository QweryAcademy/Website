$(function(){
	'use strict';
	/*
	Project Name: Eduaz
	File: css.css
	Version: 1.0
	Date: 29/01/2018
	Author Name: templateplus
	Author URI:themeforest.net/user/templateplus/portfolio
	Email: template3x@gmail.com
	-----------------------------
	
	Table of contents:
	
		1. Initialization
		2. OwlCarousel 
		3. Menu responsive
		4. Reloader
		5. Set background
		6. Header scroll
		7. Carousel
	-----------------------------*/
	
	/*----------------------
	1.Initialization
	------------------------*/
	bg_image();
	owlcarousel ();
	marginTopFirstSection();
	$(window).on('load', function () {
		$(window).trigger("scroll");
		reload();
	});
	$(window).on('scroll', function() {
		scrollheader();
	});
	$(window).on('resize', function () {
		marginTopFirstSection();
	});
	/*----------------------
	2.OwlCarousel
	------------------------*/
	function owlcarousel (){
		var $owl = $('.owl');
		$owl.each(function(){
			var $owl_item = $(this);
			$owl_item.owlCarousel({
				autoPlay:JSON.parse($owl_item.attr('data-autoplay')),
				singleItem: JSON.parse($owl_item.attr('data-singleItem')),
				items : $owl_item.attr('data-items'),
				itemsDesktop : [1199,$owl_item.attr('data-itemsDesktop')],
				itemsDesktopSmall : [992,$owl_item.attr('data-itemsDesktopSmall')],
				itemsTablet:  [797,$owl_item.attr('data-itemsTablet')],
				itemsMobile :  [479,$owl_item.attr('data-itemsMobile')],
				navigation : JSON.parse($owl_item.attr('data-buttons')),
				pagination: JSON.parse($owl_item.attr('data-pag')),
				navigationText: ['','']
			});
		});	
	}
	
	/*----------------------
	3. Menu responsive
	------------------------*/
	$('.menu-btn').on('click',function(e) {
		if($(this).hasClass('active'))
		{
			$('.menu-nav').animate({right: '-20rem'},200);
			$(this).removeClass('active');
		}
		else
		{
			$('.menu-nav').animate({right: '0px'},200);
			$(this).addClass('active');
		}
	});
	$('.menu-nav ul.menu > li').on('click',function(e) {
		var $ul_menu=$('.menu-nav ul.menu');
		if ($(window).width() < 991){ 
			$(this).children('ul').toggle();
			if($(window).height() <= $ul_menu.height())
			{
				$ul_menu.css('height',$(window).height());
			}
			else
			{
				$ul_menu.removeAttr('style');
			}
			e.stopPropagation();
		}
	});
	$('.menu-nav ul.menu > li').on('mouseover',function(e) {
		if ( $(window).width() > 991){ 
			$(this).find('.sub-menu').show();
		}
	}).mouseout(function() {
		if ( $(window).width() > 991){ 
		 $(this).find('.sub-menu').hide();
		}
	});
	
	/*----------------------
	3.Preloader
	------------------------*/
	function reload()
	{
		$('.preloader i').fadeOut('slow');
		$('.preloader').delay(500).fadeOut('slow');
		$('body').delay(500).css({'overflow':'visible'});
	}
	
	/*----------------------
	4.Set background
	------------------------*/
	function bg_image()
	{
		var $bgclass=$('.bg-offset');
		$bgclass.each(function(){
			var $img_source=$(this).attr('data-image-src');
			if($img_source){
				$(this).css('background-image','url(' + $img_source + ')');
			}
		});
	}
	function marginTopFirstSection() {
		$("section").first().css("margin-top", $('header').height());
	}
	/*----------------------
	5.Header scroll
	------------------------*/
	function scrollheader() {
		var $h_top_header=0;
		var pageY = $(window).scrollTop();
		if($('.top-header').height())
		{
			$h_top_header=$('.top-header').height();
		}
		if (pageY > $h_top_header) {
			$('header').addClass('smaller');
		} 
		else 
		{
			if($('header').hasClass('smaller')) {
				$('header').removeClass('smaller');
			}
		}
	}
	/*----------------------
	6.Carousel
	------------------------*/
	$('.carousel').carousel({
		interval: 5000,
		pause: true
	})
});