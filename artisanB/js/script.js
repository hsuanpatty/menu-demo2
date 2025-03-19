		//Update Header Style and Scroll to Top
		function headerStyle() {
			if ($(".main-header").length) {
				var windowpos = $(window).scrollTop();
				var siteHeader = $(".header-style-one");
				var scrollLink = $(".scroll-to-top");
				var sticky_header = $(".main-header .sticky-header");
				if (windowpos > 100) {
					sticky_header.addClass("fixed-header animated slideInDown");
					scrollLink.fadeIn(300);
				} else {
					sticky_header.removeClass("fixed-header animated slideInDown");
					scrollLink.fadeOut(300);
				}
				if (windowpos > 1) {
					siteHeader.addClass("fixed-header");
				} else {
					siteHeader.removeClass("fixed-header");
				}
			}
		}
		headerStyle();
	
			//Submenu Dropdown Toggle
		if ($(".main-header li.dropdown ul").length) {
			$(".main-header .navigation li.dropdown").append(
			'<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>'
		);
		}

		//Update Header Style and Scroll to Top
		function headerStyle() {
			if ($(".main-header").length) {
				var windowpos = $(window).scrollTop();
				var siteHeader = $(".header-style-one");
				var scrollLink = $(".scroll-to-top");
				var sticky_header = $(".main-header .sticky-header");
				if (windowpos > 100) {
					sticky_header.addClass("fixed-header animated slideInDown");
					scrollLink.fadeIn(300);
				} else {
					sticky_header.removeClass("fixed-header animated slideInDown");
					scrollLink.fadeOut(300);
				}
				if (windowpos > 1) {
					siteHeader.addClass("fixed-header");
				} else {
					siteHeader.removeClass("fixed-header");
				}
			}
		}
		headerStyle();

		

			//Mobile Nav Hide Show
		if ($(".mobile-menu").length) {
			var mobileMenuContent = $(".main-header .main-menu .navigation").html();
	
			$(".mobile-menu .navigation").append(mobileMenuContent);
			$(".sticky-header .navigation").append(mobileMenuContent);
			$(".mobile-menu .close-btn").on("click", function () {
				$("body").removeClass("mobile-menu-visible");
			});
	
			//Dropdown Button
			$(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
				$(this).prev("ul").slideToggle(500);
				$(this).toggleClass("active");
				$(this).parent().siblings().find('ul').slideUp();
			});
	
			//Menu Toggle Btn
			$(".mobile-nav-toggler").on("click", function () {
				$("body").addClass("mobile-menu-visible");
			});
	
			//Menu Toggle Btn
			$(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on(
				"click",
				function () {
					$("body").removeClass("mobile-menu-visible");
				}
			);
		}


	/* ---------------------------------------------------------------------- */
	/* ----------- Activate Menu Item on Reaching Different Sections ---------- */
	/* ---------------------------------------------------------------------- */
	var $onepage_nav = $(".onepage-nav");
	var $sections = $("section");
	var $window = $(window);
	function TM_activateMenuItemOnReach() {
		if ($onepage_nav.length > 0) {
			var cur_pos = $window.scrollTop() + 2;
			var nav_height = $onepage_nav.outerHeight();
			$sections.each(function () {
				var top = $(this).offset().top - nav_height - 80,
					bottom = top + $(this).outerHeight();

				if (cur_pos >= top && cur_pos <= bottom) {
					$onepage_nav
						.find("a")
						.parent()
						.removeClass("current")
						.removeClass("active");
					$sections.removeClass("current").removeClass("active");
					$onepage_nav
						.find('a[href="#' + $(this).attr("id") + '"]')
						.parent()
						.addClass("current")
						.addClass("active");
				}

				if (cur_pos <= nav_height && cur_pos >= 0) {
					$onepage_nav
						.find("a")
						.parent()
						.removeClass("current")
						.removeClass("active");
					$onepage_nav
						.find('a[href="#header"]')
						.parent()
						.addClass("current")
						.addClass("active");
				}
			});
		}
	}

	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on("scroll", function () {
		headerStyle();
		TM_activateMenuItemOnReach();
	});

	/* ==========================================================================
   When document is loading, do
   ========================================================================== */