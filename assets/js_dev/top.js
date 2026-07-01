$(function () {
  var $body = $("body");

  $("body")
    .delay(600)
    .queue(function () {
      $(this).addClass("body-loaded").dequeue();
    });

  //ページ内スクロール
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - 91;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  //スクロールしたらクラスを付与
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $body.addClass("scroll");
    } else {
      $body.removeClass("scroll");
    }
  });

  //ページトップボタンフッター前で止める
  $(document).ready(function () {
    // $(".fix_cv").hide();
    $(window).on("scroll", function () {
      scrollHeight = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
      footHeight = $(".wpcf7").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        $(".fix_cv").addClass("on");
      } else {
        $(".fix_cv").removeClass("on");
      }
    });
  });

  // var voice_swiper;
  // $(window).on('load resize', function(){
  // 	var w = $(window).width();
  // 	if (w <= 768) {
  // 		if (voice_swiper) {
  // 			return;
  // 		} else {
  // 			voice_swiper = new Swiper('.voice-swiper__body', {
  // 				// loop: true,
  // 				// autoplay: {
  // 				// 	delay: 4000,
  // 				// },
  // 				spaceBetween: 40,
  // 				slidesPerView: 1,
  // 				centeredSlides: true,
  // 				pagination: {
  // 					el: '.swiper-pagination-1',
  // 					clickable: true,
  // 				},
  // 				navigation: {
  // 					nextEl: '.swiper-button-next-1',
  // 					prevEl: '.swiper-button-prev-1',
  // 				}
  // 			});
  // 		}
  // 	} else {
  // 		if (voice_swiper) {
  // 			voice_swiper.destroy();
  // 			voice_swiper = undefined;
  // 		}
  // 	}
  // });

  // var hero_swiper
  // hero_swiper = new Swiper('.hero__bg-swiper', {
  // 	loop: true,
  // 	autoplay: {
  // 	delay: 4000
  // 	},
  // 	speed: 2000,
  // 	allowTouchMove: false,
  // 	spaceBetween: 0,
  // 	slidesPerView: 1,
  // 	centeredSlides: false,
  // 	effect: 'fade'
  // })

  // var sales_swiper;
  // $(window).on('load resize', function(){
  // 	var w = $(window).width();
  // 	if (w <= 768) {
  // 		if (sales_swiper) {
  // 			return;
  // 		} else {
  // 			sales_swiper = new Swiper('.sales-swiper__body', {
  // 				// loop: true,
  // 				// autoplay: {
  // 				// 	delay: 4000,
  // 				// },
  // 				spaceBetween: 40,
  // 				slidesPerView: 1,
  // 				centeredSlides: true,
  // 				pagination: {
  // 					el: '.swiper-pagination-2',
  // 					clickable: true,
  // 				},
  // 				navigation: {
  // 					nextEl: '.swiper-button-next-2',
  // 					prevEl: '.swiper-button-prev-2',
  // 				}
  // 			});
  // 		}
  // 	} else {
  // 		if (sales_swiper) {
  // 			sales_swiper.destroy();
  // 			sales_swiper = undefined;
  // 		}
  // 	}
  // });

  function disableScroll(event) {
    event.preventDefault();
  }

  jQuery(function ($) {
    $(".js-modal-open").on("click", function () {
      $(".js-modal").fadeIn();
      $("body").css("overflow-y", "hidden");
      return false;
    });
    $(".js-modal-close").on("click", function () {
      $(".js-modal").fadeOut();
      $("body").css("overflow-y", "auto");
      return false;
    });
  });

  //form
  ($(".form-zip-btn").on("click", function (t) {
    let e = $('[name="your-zip"]')
      .val()
      .replace(/[^0-9]/g, "");
    (2 < e.length && (e = e.slice(0, 3) + "-" + e.slice(3, 7)),
      $.getJSON(
        "https://api.zipaddress.net?callback=?",
        { zipcode: e },
        function (t) {
          ($('[name="your-prefecture"]').val(t.pref),
            $('[name="your-address"]').val(t.address));
        },
      ));
  }),
    $(".form-select").on("change", function () {
      "" == $(this).value
        ? $(this).removeClass("form-select--initial")
        : $(this).addClass("form-select--initial");
    }),
    $(".form_submit").on("click", function () {
      $(".form-text:invalid, .form-select:invalid").addClass("invalid");
    }),
    $("#your-name").length && $.fn.autoKana("#your-name", "#your-ruby"),
    $("form").on("keydown", "input, button, select", function (t) {
      var e, i;
      13 == t.keyCode &&
        "submit" != $(this).attr("type") &&
        ((e = $(this)
          .closest("form")
          .find('input, button[type="submit"], select, textarea')
          .not("[readonly]")
          .filter(":visible")),
        (t.shiftKey
          ? e.eq(e.index(this) - 1)
          : (i = e.eq(e.index(this) + 1)).length
            ? i
            : e.eq(0)
        ).focus(),
        t.preventDefault());
    }));

  //フェードインで表示（セクション）
  $(window).scroll(function () {
    $(".fadein").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });

  ($(".training_img_element").length &&
    new ScrollHint(".training_img_element", {
      i18n: { scrollable: "スクロール" },
    }),
    $(".reason-lower__body").length &&
      new ScrollHint(".reason-lower__body", {
        i18n: { scrollable: "スクロール" },
      }),
    $(".flow_list_wrapper").length &&
      new ScrollHint(".flow_list_wrapper", {
        i18n: { scrollable: "スクロール" },
      }));
});

// Swiper
if ($(".js-reason-slider").length && typeof Swiper !== "undefined") {
  var reason_swiper = new Swiper(".js-reason-slider", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: true,
    simulateTouch: true,
    touchStartPreventDefault: false,
    grabCursor: true,
    pagination: {
      el: ".reason-section__pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".reason-section__button-prev",
      nextEl: ".reason-section__button-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
}
