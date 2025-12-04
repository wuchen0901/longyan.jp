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
        'nav.chef': 'Asaki Objects',
        'nav.menu': 'Asaki Furniture',
        'nav.contact': 'Contact',
        'nav.call': 'Call Now!',
        'nav.reserve': 'Reserve a table',
        'hero1.subtitle': '浅喜·CASACHY',
        'hero1.title': 'Champion a new literati lifestyle',
        'hero1.cta': 'View products',
        'hero2.subtitle': 'Your Perfect Breakfast',
        'hero2.title': 'The best dinning quality can be here too!',
        'hero2.cta': 'Discover menu',
        'hero3.subtitle': 'New Restaurant in Town',
        'hero3.title': 'Enjoy our special menus every Sunday and Friday',
        'hero3.cta': 'Reservation',
        'about.kicker': 'About Asaki',
        'about.title': 'Unburdened mind, that is Asaki',
        'about.body1': 'Asaki CASACHY, founded in 2013, seeks to revive the Song-era aesthetic and cultivate a refined, modern literati lifestyle. We distill Eastern aesthetics, unite artisanship, and craft furniture and objects with traditional techniques to recreate the ideal literati dwelling.',
        'about.body2': '"Asaki" is a quiet attitude and an insight from within—an impartial pursuit of the middle way. It is a subtle feeling, like the Buddha’s serene smile when holding a flower, a gentle touch akin to the literati’s musings on Zhuangzi’s dream of the butterfly.',
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
        'nav.chef': '浅 喜 文 玩 器 物',
        'nav.menu': '浅喜家具',
        'nav.contact': 'お問い合わせ',
        'nav.call': '今すぐ電話',
        'nav.reserve': '予約する',
        'hero1.subtitle': '浅喜・CASACHY',
        'hero1.title': '新しい文人のライフスタイルを提案します',
        'hero1.cta': '製品を見る',
        'hero2.subtitle': '理想の朝食',
        'hero2.title': '最高のクオリティをここで',
        'hero2.cta': 'メニューを見る',
        'hero3.subtitle': '新しい茶室がオープン',
        'hero3.title': '毎週日曜と金曜は特別メニュー',
        'hero3.cta': '予約する',
        'about.kicker': '浅喜について',
        'about.title': '心無掛礙 それが浅喜',
        'about.body1': '浅喜CASACHY は2013年創業。宋代の生活美学を現代に蘇らせ、新しい文人の雅な暮らしを提案します。東洋の美意識を磨き、匠の技を凝縮し、伝統技法で家具や器物を丁寧に仕上げ、理想の文人空間を再現します。',
        'about.body2': '「浅喜」とは静かな姿勢であり、内から生まれる悟り。偏らず中庸を求める心、仏典の拈花微笑のようにふと心が動く瞬間、文人が詠む荘周夢蝶のような淡い感覚を表します。',
        'team.title': '『 浅 喜 文 玩 器 物 』',
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
        'nav.chef': '浅喜文玩器物',
        'nav.menu': '浅喜家具',
        'nav.contact': '联系',
        'nav.call': '立即拨打',
        'nav.reserve': '预订座位',
        'hero1.subtitle': '浅喜·CASACHY',
        'hero1.title': '倡导新文人生活',
        'hero1.cta': '查看产品',
        'hero2.subtitle': '你的完美早餐',
        'hero2.title': '这里也有顶级用餐品质',
        'hero2.cta': '查看菜单',
        'hero3.subtitle': '全新茶室',
        'hero3.title': '每周日和周五特选菜单',
        'hero3.cta': '立即预约',
        'about.kicker': '关于浅喜',
        'about.title': '心无挂碍 即是浅喜',
        'about.body1': '浅喜CASACHY，创立于2013年，本着复兴宋代生活美学的愿望，致力于修习新文人雅致生活。提炼东方美元素，凝聚匠人匠心，以传统工艺手法精心制作家具、器物，还原文人理想生活间。',
        'about.body2': '“浅喜”是一种安静的态度，是源自内心的感悟，是在不偏不倚中追寻中道，一种淡淡的感觉，如同佛经描摹的拈花一笑，一丝轻轻的触动，就像文人叹咏的庄生梦蝶。',
        'team.title': '『 浅 喜 文 玩 器 物 』',
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
