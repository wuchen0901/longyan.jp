(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    function collapseNavOnScroll() {
      var $navbar = $(".navbar");
      if (!$navbar.length) {
        return;
      }
      if ($navbar.offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
    }

    function bindNavbarBehavior() {
      $(document).on('click', '.navbar-collapse a', function(){
        $(".navbar-collapse").collapse('hide');
      });
      $(window).on('scroll', collapseNavOnScroll);
      collapseNavOnScroll();
    }


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
    function bindSmoothScroll() {
      $(document).on('click', '.smoothScroll', function(event) {
        var target = $(this).attr('href');
        if (target && target.indexOf('#') === 0 && $(target).length) {
          $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 49
          }, 1000);
          event.preventDefault();
        }
      });
    }


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

    // MULTI-LANGUAGE SWITCHER
    var translations = {
      en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.wares': 'Wares',
        'nav.furniture': 'Furniture',
        'nav.contact': 'Contact',
        'nav.call': 'Call Now!',
        'nav.reserve': 'Reserve a table',
        'hero1.subtitle': '浅喜·CASACHY',
        'hero1.title': 'Champion a new literati lifestyle',
        'hero1.cta': 'About Casachy',
        'hero2.subtitle': '浅喜器物',
        'hero2.title': 'Carrying Eastern spirit, reviving elegant wares',
        'hero2.cta': 'Explore wares',
        'hero3.subtitle': 'Casachy Furniture',
        'hero3.title': 'Ensure every furniture piece feels alive',
        'hero3.cta': 'View furniture',
        'about.kicker': 'Casachy Wares',
        'about.title': 'Savor every detail and charm of each antique piece',
        'about.body1': 'Living spaces go beyond furniture—they include the tea utensils of tea lovers, the brush and ink treasures of literati, and every object that carries spirit. Casachy draws on heirloom pieces, savoring their texture and charm, using just-right craft and design to awaken refined taste and revive an elegant atmosphere.',
        'about.body2': 'Casachy wares choose natural materials and follow traditional methods to achieve a simple, lustrous feel. Song-dynasty objects were often monochrome, clean, and balanced—measured proportions, gentle texture, and restrained beauty. Continuing that lineage, Casachy reserves a quiet corner in daily bustle for a calm mind.',
        'about.meaning.title': 'Meaning of the name',
        'about.meaning.body1': '“Casachy” suggests a gentle, unobtrusive joy—a calm attitude that comes from within and seeks balance.',
        'about.meaning.body2': 'It is like the Buddha’s serene smile at a single flower, or the fleeting feeling in Zhuangzi’s butterfly dream.',
        'about.background.title': 'Brand background',
        'about.background.body1': 'Founder and design director Chen Xin grew up loving classical literati aesthetics. Inspired in 2010, he spent three years preparing and launched Casachy in 2013 to create furniture and objects with the spirit of Song-era elegance.',
        'about.style.title': 'Casachy style: honoring classics, seeking the new',
        'about.style.body1': 'Drawing from Song-dynasty literati culture, Casachy searches for the inner spirit of oriental craft—integrating furniture and objects into tranquil tea rooms and study spaces for a holistic aesthetic.',
        'about.more': 'More',
        'team.title': 'Casachy wares you love',
        'team.subtitle': 'Savor the Zen of moonlit pines',
        'product.wood': 'Wood',
        'product.ceramic': 'Ceramic',
        'product.glass': 'Glass',
        'product.woodDesc': 'Natural wood, rustic craft, warm vibe',
        'product.ceramicDesc': 'Handcrafted, colorful, tradition meets modern',
        'product.glassDesc': 'Transparent, modern, light and airy',
        'wares.menu.all': 'All',
        'wares.menu.woodTitle': 'Wood',
        'wares.menu.woodSubtitle': 'Natural wood, rustic craft, warm vibe',
        'wares.menu.ceramicTitle': 'Ceramic',
        'wares.menu.ceramicSubtitle': 'Handcrafted feel, rich colors, tradition meets modern',
        'wares.menu.glassTitle': 'Glass',
        'wares.menu.glassSubtitle': 'Transparent, modern, light and airy',
        'menu.title': 'Our Menus',
        'menu.subtitle': 'Honoring the classics, discovering the new',
        'testimonial.title': 'Testimonials',
        'nav.careers': 'Careers',
        'footer.findus': 'Find us',
        'footer.reservation': 'Reservation',
        'footer.hours': 'Open Hours',
        'hours.monday': 'Monday: Closed',
        'hours.weekdays': 'Tuesday to Friday',
        'hours.weekdayHours': '7:00 AM - 9:00 PM',
        'hours.weekend': 'Saturday - Sunday',
        'hours.weekendHours': '11:00 AM - 10:00 PM',
        'furniture.kicker': 'Casachy Furniture',
        'furniture.title': 'Casachy Furniture',
        'furniture.tagline': 'Every furniture piece feels alive',
        'furniture.title.craft': 'Honoring traditional craft, perfecting every detail',
        'furniture.title.wood': 'We choose solid wood to keep its warm, substantial feel',
        'furniture.intro1': 'We refine classical forms and strictly adjust our furniture so every piece feels alive. Materials are carefully chosen and processes certified (FSC wood, BSCI production) to meet responsible standards.',
        'furniture.intro2': '"Casachy" is a quiet attitude—an inner awakening, a gentle balance like a flower held with a smile or the fleeting feeling of a butterfly dream.',
        'furniture.craft1': 'Traditional joinery is the heart of Chinese furniture. We insist on true mortise-and-tenon—not biscuit or dowel—built to historical precision. Many joints cannot be mass-produced and demand patient handwork.',
        'furniture.craft2': 'We use solid wood for its warm, breathing quality. Like classical pieces, we frame panels on all sides to manage movement, a labor-intensive approach that keeps table tops stable and reassuring.'
      },
      ja: {
        'nav.home': 'ホーム',
        'nav.about': '浅喜について',
        'nav.wares': '浅喜文玩器物',
        'nav.furniture': '浅喜家具',
        'nav.contact': 'お問い合わせ',
        'nav.call': '今すぐ電話',
        'nav.reserve': '予約する',
        'hero1.subtitle': '浅喜・CASACHY',
        'hero1.title': '新しい文人のライフスタイルを提案します',
        'hero1.cta': '浅喜について',
        'hero2.subtitle': '理想の朝食',
        'hero2.title': '東方の精神を受け継ぎ、器物の雅さを再現',
        'hero2.cta': '器物を見る',
        'hero3.subtitle': '浅喜家具',
        'hero3.title': 'すべての家具に生命感を宿す',
        'hero3.cta': '家具を見る',
        'about.kicker': '浅喜文玩器物',
        'about.title': '古物の細部と風趣を味わう',
        'about.body1': '暮らしの空間は家具だけでなく、茶人の茶器や文人の文房具、気韻を宿す一つひとつの器物まで含まれます。浅喜は伝世品に学び、その肌理と風趣を味わい、ちょうどよい工芸とデザインで内なる雅趣を呼び覚まし、優雅な空気を再構築します。',
        'about.body2': '浅喜の器物は天然素材と古法の技を選び、素朴で艶のある質感を目指します。宋代の器は単色が多く、簡潔で均整がとれた造形と控えめな肌理で内に秘めた美を示しました。その系譜を継ぎ、日常の喧噪に静かな余白を残し、心を安んじる場をつくります。',
        'about.meaning.title': '名称の意味',
        'about.meaning.body1': '「浅喜」は、内面から生まれる穏やかな悦びを指し、偏りなく中庸を求める姿勢を表します。',
        'about.meaning.body2': '一輪の花に微笑む仏のように、荘周夢蝶の淡い感覚のように、ふと心が動く瞬間を大切にしています。',
        'about.background.title': 'ブランドの背景',
        'about.background.body1': '創業者・デザインディレクターの陳新は、宋代の文人美学に魅せられ、2013年に浅喜を立ち上げました。現代の空間に合う家具と器を、伝統の技と精神で形にしています。',
        'about.style.title': '浅喜のスタイル：格古而知新',
        'about.style.body1': '宋代文人文化を源流に、茶室や書斎など静かな空間に調和する家具と器を総合的に探求し、古典の精神を今に生かします。',
        'about.more': '詳細を見る',
        'team.title': '浅喜文玩器物',
        'team.subtitle': '明月と松の間の禅意を味わう',
        'product.wood': '木製',
        'product.ceramic': '陶器',
        'product.glass': 'ガラス',
        'product.woodDesc': '自然木の風合い、素朴な技、温かみ',
        'product.ceramicDesc': '手仕事感、彩り豊か、伝統とモダン',
        'product.glassDesc': '透明感、モダン、軽やかで動きのある印象',
        'wares.menu.all': 'すべて',
        'wares.menu.woodTitle': '木製',
        'wares.menu.woodSubtitle': '自然木の風合い、素朴な技、温かみ',
        'wares.menu.ceramicTitle': '陶器',
        'wares.menu.ceramicSubtitle': '手仕事感、彩り豊か、伝統とモダン',
        'wares.menu.glassTitle': 'ガラス',
        'wares.menu.glassSubtitle': '透明感、モダン、軽やかで動きのある印象',
        'menu.title': '浅喜家具',
        'menu.subtitle': '格古にして新を知る',
        'testimonial.title': 'お客様の声',
        'nav.careers': '採用情報',
        'footer.findus': '所在地',
        'footer.reservation': '予約',
        'footer.hours': '営業時間',
        'hours.monday': '月曜：定休日',
        'hours.weekdays': '火曜〜金曜',
        'hours.weekdayHours': '7:00 AM - 9:00 PM',
        'hours.weekend': '土曜・日曜',
        'hours.weekendHours': '11:00 AM - 10:00 PM',
        'furniture.kicker': '浅喜家具',
        'furniture.title': '浅喜家具',
        'furniture.tagline': 'すべての家具に生命感を宿す',
        'furniture.title.craft': '伝統の技を守り、細部まで磨き上げる',
        'furniture.title.wood': '無垢材を選び、その温もりと重厚感を活かす',
        'furniture.intro1': '古典の形を見直し、素材も工法も厳しく管理。FSC認証の木材、BSCI認証の製造で責任ある家具づくりを徹底しています。',
        'furniture.intro2': '「浅喜」は静かな姿勢。中庸を求める内なる悟りであり、拈花微笑や夢蝶のような淡い感覚を大切にします。',
        'furniture.craft1': '中国伝統家具の核心は榫卯（ほぞ組）。ビスケットやダボではなく、古法の精緻なほぞを守ります。多くの工程が手作業となり、量産には向きません。',
        'furniture.craft2': '温かな質感をもつ無垢材を使用。四方框に芯板を通す伝統構造で木の呼吸に対応し、手間はかかりますが安定した天板を実現します。',
      },
      zh: {
        'nav.home': '首页',
        'nav.about': '关于我们',
        'nav.wares': '浅喜器物',
        'nav.furniture': '浅喜家具',
        'nav.contact': '联系',
        'nav.call': '立即拨打',
        'nav.reserve': '预订座位',
        'hero1.subtitle': '浅喜·CASACHY',
        'hero1.title': '倡导新文人生活',
        'hero1.cta': '关于浅喜',
        'hero2.subtitle': '你的完美早餐',
        'hero2.title': '秉承东方精神 再現器物的典雅气息',
        'hero2.cta': '查看器物',
        'hero3.subtitle': '浅喜家具',
        'hero3.title': '确保每一件家具都是活着的有生命力的作品',
        'hero3.cta': '查看家具',
        'about.kicker': '浅喜文玩器物',
        'about.title': '把握每一件古物的细节和韵味',
        'about.body1': '生活空间不止于家具，还有茶人的茶器、文人的文房书宝，以及每一件承载气韵的器物。浅喜从传世之物汲取灵感，细味古玩的肌理与韵致，以恰到好处的工艺和设计，唤醒内心的高雅趣味，再造雅致气息。',
        'about.body2': '浅喜器物选用天然材质、沿用古法工艺，追求朴素而有光泽的质感。宋代器物多单色、简洁而优美，以匀称的造型、舒适的比例、含蓄的肌理呈现内敛之美。浅喜秉承这一脉络，在喧嚣的日常里留一方静谧，让人得以安放自心。',
        'about.meaning.title': '名称的意义',
        'about.meaning.body1': '“浅喜”象征一种温和而宁静的喜悦，来自内心，对中道的追寻。',
        'about.meaning.body2': '宛如佛典中的拈花一笑，也似庄周梦蝶的恍惚感悟，轻柔而悠远。',
        'about.background.title': '品牌背景',
        'about.background.body1': '创始人兼设计总监陈新自幼热爱文人美学，2013年创立浅喜，将宋代意趣与当代空间结合，打造雅致器物与家具。',
        'about.style.title': '格古而知新',
        'about.style.body1': '取法宋代文人文化，强调器与空间的整体美学，将古典精神融入现代茶室与书房的静谧氛围。',
        'about.more': '查看更多',
        'team.title': '浅喜文玩器物',
        'team.subtitle': '品味明月松间的禅意',
        'product.wood': '木质',
        'product.ceramic': '陶瓷',
        'product.glass': '玻璃',
        'product.woodDesc': '原木自然、工艺质朴、温暖风',
        'product.ceramicDesc': '手工感、色彩丰富、传统与现代',
        'product.glassDesc': '通透、现代感、轻盈灵动',
        'wares.menu.all': '全部',
        'wares.menu.woodTitle': '木质',
        'wares.menu.woodSubtitle': '原木自然、工艺质朴、温暖风',
        'wares.menu.ceramicTitle': '陶瓷',
        'wares.menu.ceramicSubtitle': '手工感、色彩丰富、传统与现代',
        'wares.menu.glassTitle': '玻璃',
        'wares.menu.glassSubtitle': '通透、现代感、轻盈灵动',
        'menu.title': '文玩器物',
        'menu.subtitle': '格古而知新',
        'testimonial.title': '顾客见证',
        'nav.careers': '招聘信息',
        'footer.findus': '找到我们',
        'footer.reservation': '预订',
        'footer.hours': '营业时间',
        'hours.monday': '周一：休息',
        'hours.weekdays': '周二至周五',
        'hours.weekdayHours': '7:00 AM - 9:00 PM',
        'hours.weekend': '周六、周日',
        'hours.weekendHours': '11:00 AM - 10:00 PM',
        'furniture.kicker': '浅喜家具',
        'furniture.title': '浅喜家具',
        'furniture.tagline': '每一件家具都是活着的有生命力',
        'furniture.title.craft': '秉承传统工艺的理念，注重细微之处',
        'furniture.title.wood': '坚持选用纯实木，保留温润厚实的质感',
        'furniture.intro1': '对古典形制进行梳理，对家具进行了严格的要求及调整。为确保每一件家具都是活着的有生命力的作品，浅喜的家具无论在原材料的选择上及工艺上都严格把关。所用的木材均获得FSC认证(国际森林认证)，制作过程也获得BSCI认证，符合欧盟社会责任的标准。',
        'furniture.intro2': '“浅喜”是一种安静的态度，是源自内心的感悟，是在不偏不倚中追寻中道，一种淡淡的感觉，如同佛经描摹的拈花一笑，一丝轻轻的触动，就像文人叹咏的庄生梦蝶。',
        'furniture.craft1': '中国传统家具工艺的核心在于榫卯结构，虽然外部不着痕迹，但是榫卯却是家具文化最关键的部分。浅喜坚持使用纯正的榫卯结构，不仅仅是为了家具的牢固度，更是为了文化的传承。现代家具常用的圆木榫，饼干榫，严格来说并不是真正意义上的传统榫卯。浅喜的榫卯结构完全以古人精工细作的标准来要求自己。比如椅子，在试拼装未涂任何胶水时，就已经可以稳稳端坐。因此，浅喜家具的多数榫卯并不适合机器大规模生产，需要诸多繁复的手作工序。',
        'furniture.craft2': '浅喜家具的选材上坚持使用实木。实木温润厚实的质感是其他材料所无法替代的。实木是一种会呼吸的材料，随着气候的变化会收缩膨胀，所以浅喜所有的家具和传统家具一样采用了四边框加芯板穿带的结构，来使桌面稳固，这种结构比现在主流的整板实木桌面要费工许多，却也安心许多。'
      }
    };

    // Default to Japanese on every load; users can still switch via the language toggles
    var currentLang = 'ja';
    var langCycle = ['zh', 'ja', 'en'];
    var langLabels = {
      zh: '中文 🇨🇳',
      ja: '日本語 🇯🇵',
      en: 'English 🇺🇸'
    };

    function updateLangToggleLabel(lang) {
      var label = langLabels[lang] || langLabels.en;
      var $btn = $('.lang-toggle-btn');
      var $span = $btn.find('span');
      if ($span.length) {
        $span.text(label);
      } else {
        $btn.text(label);
      }
    }

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
      currentLang = lang;
      updateLangToggleLabel(currentLang);
    }

    // Shared navbar template so all pages reuse the same markup without duplication
    var navbarTemplate = '\
<section class="navbar custom-navbar navbar-fixed-top" role="navigation">\
  <div class="container">\
    <div class="navbar-header">\
      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\
        <span class="icon icon-bar"></span>\
        <span class="icon icon-bar"></span>\
        <span class="icon icon-bar"></span>\
      </button>\
      <a href="index.html" class="navbar-brand">浅喜<span>.</span>CASACHY</a>\
    </div>\
    <div class="collapse navbar-collapse">\
      <ul class="nav navbar-nav navbar-nav-first">\
        <li><a href="index.html" data-i18n="nav.home">ホーム</a></li>\
        <li><a href="about.html" data-i18n="nav.about">浅喜について</a></li>\
        <li><a href="wares.html" data-i18n="nav.wares">Casachy Wares</a></li>\
        <li><a href="furniture.html" data-i18n="nav.furniture">浅喜家具</a></li>\
        <li><a href="careers.html" data-i18n="nav.careers">採用情報</a></li>\
      </ul>\
      <ul class="nav navbar-nav navbar-right">\
        <li><a href="#"><span data-i18n="nav.call">Call Now!</span> <i class="fa fa-phone"></i> 090-9873-2131</a></li>\
        <li><a href="#" class="lang-toggle-btn"><span>日本語 🇯🇵</span></a></li>\
      </ul>\
    </div>\
  </div>\
</section>';

    var footerTemplate = '\
<footer id="footer" data-stellar-background-ratio="0.5">\
  <div class="container">\
    <div class="row">\
      <div class="col-md-3 col-sm-8">\
        <div class="footer-info">\
          <div class="section-title">\
            <h2 class="wow fadeInUp" data-wow-delay="0.2s" data-i18n="footer.findus">Find us</h2>\
          </div>\
          <address class="wow fadeInUp" data-wow-delay="0.4s">\
            <p>京都府京都市左京区浄土寺南田町9番地6</p>\
          </address>\
        </div>\
      </div>\
      <div class="col-md-3 col-sm-8">\
        <div class="footer-info">\
          <div class="section-title">\
            <h2 class="wow fadeInUp" data-wow-delay="0.2s" data-i18n="footer.reservation">Reservation</h2>\
          </div>\
          <address class="wow fadeInUp" data-wow-delay="0.4s">\
            <p>090-9873-2131</p>\
            <p><a href="mailto:sunychan@casachy.com">sunychan@casachy.com</a></p>\
            <p>WeChat: sunnychantak</p>\
          </address>\
        </div>\
      </div>\
      <div class="col-md-4 col-sm-8">\
        <div class="footer-info footer-open-hour">\
          <div class="section-title">\
            <h2 class="wow fadeInUp" data-wow-delay="0.2s" data-i18n="footer.hours">Open Hours</h2>\
          </div>\
          <div class="wow fadeInUp" data-wow-delay="0.4s">\
            <p data-i18n="hours.monday">Monday: Closed</p>\
            <div>\
              <strong data-i18n="hours.weekdays">Tuesday to Friday</strong>\
              <p data-i18n="hours.weekdayHours">7:00 AM - 9:00 PM</p>\
            </div>\
            <div>\
              <strong data-i18n="hours.weekend">Saturday - Sunday</strong>\
              <p data-i18n="hours.weekendHours">11:00 AM - 10:00 PM</p>\
            </div>\
          </div>\
        </div>\
      </div>\
      <div class="col-md-2 col-sm-4">\
        <ul class="wow fadeInUp social-icon" data-wow-delay="0.4s">\
          <li><a href="#" class="fa fa-facebook-square" attr="facebook icon"></a></li>\
          <li><a href="#" class="fa fa-twitter"></a></li>\
          <li><a href="#" class="fa fa-instagram"></a></li>\
          <li><a href="#" class="fa fa-google"></a></li>\
        </ul>\
        <div class="wow fadeInUp copyright-text" data-wow-delay="0.8s">\
          <p><br>Copyright &copy; <span class="current-year"></span> <br>朗元株式会社 <br><br></p>\
        </div>\
      </div>\
    </div>\
  </div>\
</footer>';

    function loadNavbar() {
      var placeholder = document.getElementById('navbar-placeholder');
      if (!placeholder) {
        return Promise.resolve();
      }
      placeholder.innerHTML = navbarTemplate;
      return Promise.resolve();
    }

    function loadFooter() {
      var placeholder = document.getElementById('footer-placeholder');
      if (!placeholder) {
        return Promise.resolve();
      }
      placeholder.innerHTML = footerTemplate;
      var year = new Date().getFullYear();
      var yearNodes = placeholder.getElementsByClassName('current-year');
      for (var i = 0; i < yearNodes.length; i++) {
        yearNodes[i].textContent = year;
      }
      return Promise.resolve();
    }

    function updateWaresLabels(titleKey, subtitleKey) {
      var map = translations[currentLang] || translations.en;
      var $title = $('#wares-filter-title');
      var $subtitle = $('#wares-filter-subtitle');
      if ($title.length && titleKey) {
        $title.attr('data-i18n', titleKey).text(map[titleKey] || titleKey);
      }
      if ($subtitle.length && subtitleKey) {
        $subtitle.attr('data-i18n', subtitleKey).text(map[subtitleKey] || subtitleKey);
      }
    }

    function bindWaresFilter() {
      var $grid = $('#wares-grid');
      if (!$grid.length) {
        return;
      }

      var $items = $grid.find('.menu-item-wrap');
      var queryFilter = new URLSearchParams(window.location.search).get('filter');

      function setFilter(category, titleKey, subtitleKey) {
        $items.each(function() {
          var isMatch = category === 'all' || $(this).data('category') === category;
          $(this).toggle(isMatch);
        });
        if (titleKey && subtitleKey) {
          updateWaresLabels(titleKey, subtitleKey);
        }
      }

      $(document).on('click', '.filter-btn', function(e) {
        e.preventDefault();
        var $btn = $(this);
        if ($btn.hasClass('active')) {
          return;
        }
        var category = $btn.data('filter');
        var titleKey = $btn.data('title-key');
        var subtitleKey = $btn.data('subtitle-key');

        $('.filter-btn').removeClass('active');
        $btn.addClass('active');
        setFilter(category, titleKey, subtitleKey);
      });

      var initialBtn = $('.filter-btn.active');
      if (queryFilter) {
        var $queryBtn = $('.filter-btn[data-filter="' + queryFilter + '"]');
        if ($queryBtn.length) {
          $('.filter-btn').removeClass('active');
          $queryBtn.addClass('active');
          initialBtn = $queryBtn;
        }
      }
      if (initialBtn.length) {
        setFilter(initialBtn.data('filter'), initialBtn.data('title-key'), initialBtn.data('subtitle-key'));
      }
    }

    $(document).on('click', '.lang-option', function(e) {
      e.preventDefault();
      var lang = $(this).data('lang');
      applyTranslations(lang);
    });

    $(document).on('click', '.lang-toggle-btn', function(e) {
      e.preventDefault();
      var currentIndex = langCycle.indexOf(currentLang);
      var nextIndex = (currentIndex + 1) % langCycle.length;
      var nextLang = langCycle[nextIndex] || 'en';
      applyTranslations(nextLang);
    });

    $(function() {
      bindSmoothScroll();
      applyTranslations(currentLang);
      Promise.all([loadNavbar(), loadFooter()]).then(function() {
        bindNavbarBehavior();
        applyTranslations(currentLang);
      });
      bindWaresFilter();
    });

})(jQuery);
