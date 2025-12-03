(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // SLIDER
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    })


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


    // MAGNIFIC POPUP
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
        },
        zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });  

/*
    // CONTACT FORM
    $("#contact-form").submit(function (e) {
      e.preventDefault();
      var name = $("#cf-name").val();
      var email = $("#cf-email").val();
      var subject = $("#cf-subject").val();
      var message = $("#cf-message").val();
      var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

      function isValidEmail(emailAddress) {
          var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
          return pattern.test(emailAddress);
      };
      if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
          $.ajax({
              type: "POST",
              url: "email.php",
              data: dataString,
              success: function () {
                  $('.text-success').fadeIn(1000);
                  $('.text-danger').fadeOut(500);
              }
          });
      }
      else {
          $('.text-danger').fadeIn(1000);
          $('.text-success').fadeOut(500);
      }
      return false;
    });

*/


    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

    // MULTI-LANGUAGE SWITCHER
    var translations = {
      en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.chef': 'Chef',
        'nav.menu': 'Menu',
        'nav.contact': 'Contact',
        'nav.call': 'Call Now!',
        'nav.reserve': 'Reserve a table',
        'hero1.subtitle': '浅喜·CASACHY',
        'hero1.title': 'Champion a new literati lifestyle',
        'hero1.cta': 'Meet our chef',
        'hero2.subtitle': 'Your Perfect Breakfast',
        'hero2.title': 'The best dinning quality can be here too!',
        'hero2.cta': 'Discover menu',
        'hero3.subtitle': 'New Restaurant in Town',
        'hero3.title': 'Enjoy our special menus every Sunday and Friday',
        'hero3.cta': 'Reservation',
        'about.kicker': 'Read our story',
        'about.title': "We've been Making The Delicious Foods Since 1999",
        'about.body1': 'Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada. Proin scelerisque risus et ipsum semper molestie sed in nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id.',
        'about.body2': 'Sed elementum vel felis sed scelerisque. In arcu diam, sollicitudin eu nibh ac, posuere tristique magna.',
        'team.title': 'Asaki objects you love',
        'team.subtitle': 'Product Introduction',
        'product.wood': 'Wood',
        'product.ceramic': 'Ceramic',
        'product.glass': 'Glass',
        'product.woodDesc': 'Natural wood, rustic craft, warm vibe',
        'product.ceramicDesc': 'Handcrafted, colorful, tradition meets modern',
        'product.glassDesc': 'Transparent, modern, light and airy',
        'menu.title': 'Our Menus',
        'menu.subtitle': 'Tea Time &amp; Dining',
        'testimonial.title': 'Testimonials',
        'footer.findus': 'Find us',
        'footer.reservation': 'Reservation',
        'footer.hours': 'Open Hours',
        'hours.monday': 'Monday: Closed',
        'hours.weekdays': 'Tuesday to Friday',
        'hours.weekdayHours': '7:00 AM - 9:00 PM',
        'hours.weekend': 'Saturday - Sunday',
        'hours.weekendHours': '11:00 AM - 10:00 PM'
      },
      ja: {
        'nav.home': 'ホーム',
        'nav.about': '私たちについて',
        'nav.chef': 'シェフ',
        'nav.menu': 'メニュー',
        'nav.contact': 'お問い合わせ',
        'nav.call': '今すぐ電話',
        'nav.reserve': '予約する',
        'hero1.subtitle': '浅喜・CASACHY',
        'hero1.title': '新しい文人のライフスタイルを提案します',
        'hero1.cta': 'シェフを紹介',
        'hero2.subtitle': '理想の朝食',
        'hero2.title': '最高のクオリティをここで',
        'hero2.cta': 'メニューを見る',
        'hero3.subtitle': '新しい茶室がオープン',
        'hero3.title': '毎週日曜と金曜は特別メニュー',
        'hero3.cta': '予約する',
        'about.kicker': '私たちのストーリー',
        'about.title': '1999年からおいしさを届けています',
        'about.body1': 'フセ・ヘンドレリット・マレサエダ。常に丁寧に仕込み、味わいを積み重ねてきました。リラックスできる空間で、心地よい時間をお過ごしください。',
        'about.body2': 'この空間で静かにお茶を楽しみながら、心地よいひとときをお過ごしください。',
        'team.title': '浅 喜 文 玩 器 物',
        'team.subtitle': '製品紹介',
        'product.wood': '木製',
        'product.ceramic': '陶器',
        'product.glass': 'ガラス',
        'product.woodDesc': '自然木の風合い、素朴な技、温かみ',
        'product.ceramicDesc': '手仕事感、彩り豊か、伝統とモダン',
        'product.glassDesc': '透明感、モダン、軽やかで動きのある印象',
        'menu.title': 'メニュー',
        'menu.subtitle': 'ティータイム &amp; ダイニング',
        'testimonial.title': 'お客様の声',
        'footer.findus': '所在地',
        'footer.reservation': '予約',
        'footer.hours': '営業時間',
        'hours.monday': '月曜：定休日',
        'hours.weekdays': '火曜〜金曜',
        'hours.weekdayHours': '7:00 AM - 9:00 PM',
        'hours.weekend': '土曜・日曜',
        'hours.weekendHours': '11:00 AM - 10:00 PM'
      },
      zh: {
        'nav.home': '首页',
        'nav.about': '关于我们',
        'nav.chef': '主厨',
        'nav.menu': '菜单',
        'nav.contact': '联系',
        'nav.call': '立即拨打',
        'nav.reserve': '预订座位',
        'hero1.subtitle': '浅喜·CASACHY',
        'hero1.title': '倡导新文人生活',
        'hero1.cta': '认识主厨',
        'hero2.subtitle': '你的完美早餐',
        'hero2.title': '这里也有顶级用餐品质',
        'hero2.cta': '查看菜单',
        'hero3.subtitle': '全新茶室',
        'hero3.title': '每周日和周五特选菜单',
        'hero3.cta': '立即预约',
        'about.kicker': '了解我们的故事',
        'about.title': '自1999年用心制作美味',
        'about.body1': '我们始终坚持精心烹饪，用美味与您相伴。来到这里，享受放松而愉悦的时光。',
        'about.body2': '在这里静心品茶，享受舒缓的时光。',
        'team.title': '浅喜文玩器物',
        'team.subtitle': '产品介绍',
        'product.wood': '木质',
        'product.ceramic': '陶瓷',
        'product.glass': '玻璃',
        'product.woodDesc': '原木自然、工艺质朴、温暖风',
        'product.ceramicDesc': '手工感、色彩丰富、传统与现代',
        'product.glassDesc': '通透、现代感、轻盈灵动',
        'menu.title': '我们的菜单',
        'menu.subtitle': '下午茶与正餐',
        'testimonial.title': '顾客见证',
        'footer.findus': '找到我们',
        'footer.reservation': '预订',
        'footer.hours': '营业时间',
        'hours.monday': '周一：休息',
        'hours.weekdays': '周二至周五',
        'hours.weekdayHours': '7:00 AM - 9:00 PM',
        'hours.weekend': '周六、周日',
        'hours.weekendHours': '11:00 AM - 10:00 PM'
      }
    };

    function applyTranslations(lang) {
      var map = translations[lang] || translations.en;
      $('[data-i18n]').each(function() {
        var key = $(this).data('i18n');
        if (map[key]) {
          $(this).html(map[key]);
        }
      });
      $('.lang-option').removeClass('active');
      $('.lang-option[data-lang="' + lang + '"]').addClass('active');
      localStorage.setItem('siteLang', lang);
    }

    $('.lang-option').on('click', function(e) {
      e.preventDefault();
      var lang = $(this).data('lang');
      applyTranslations(lang);
    });

    applyTranslations('ja');

})(jQuery);
