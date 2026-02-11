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
        'contact.heading': 'Contact Us',
        'contact.address': '9-6 Jodoji Minamidacho, Sakyo Ward, Kyoto 606-8403',
        'hero1.subtitle': '朗元·LONGYAN',
        'hero1.title': 'Champion a new literati lifestyle',
        'hero1.cta': 'About Longyan',
        'hero2.subtitle': 'longyan wares',
        'hero2.title': 'Carrying Eastern spirit, reviving elegant wares',
        'hero2.cta': 'Explore wares',
        'hero3.subtitle': 'longyan Furniture',
        'hero3.title': 'Ensure every furniture piece feels alive',
        'hero3.cta': 'View furniture',
        'hero4.subtitle': 'Join Longyan',
        'hero4.title': 'Join us to bring thousand-year Eastern aesthetics into modern daily life',
        'hero4.cta': 'View roles',
        'about.kicker': 'About longyan',
        'about.title': 'Savor every detail and charm of each antique piece',
        'about.body1': 'Living spaces go beyond furniture—they include the tea utensils of tea lovers, the brush and ink treasures of literati, and every object that carries spirit. longyan draws on heirloom pieces, savoring their texture and charm, using just-right craft and design to awaken refined taste and revive an elegant atmosphere.',
        'about.body2': 'longyan wares choose natural materials and follow traditional methods to achieve a simple, lustrous feel. Song-dynasty objects were often monochrome, clean, and balanced—measured proportions, gentle texture, and restrained beauty. Continuing that lineage, longyan reserves a quiet corner in daily bustle for a calm mind.',
        'about.business.kicker': 'Business scope',
        'about.business.title': 'Our core businesses',
        'about.business.body': 'From planning and making to showcasing and trading, Longyan builds a refined way of living across these pillars:',
        'about.business.item1': 'Planning, manufacturing, sale, and import/export of various products',
        'about.business.item2': 'Exhibition, sale, and import/export of artworks and crafts',
        'about.business.item3': 'Sale and import/export of alcoholic beverages',
        'about.business.item4': 'Licensed antique dealing in line with the Antique Dealings Act',
        'about.meaning.title': 'Meaning of the name',
        'about.meaning.body1': '“longyan” suggests a gentle, unobtrusive joy—a calm attitude that comes from within and seeks balance.',
        'about.meaning.body2': 'It is like the Buddha’s serene smile at a single flower, or the fleeting feeling in Zhuangzi’s butterfly dream.',
        'about.background.title': 'Brand background',
        'about.background.body1': 'Founder and design director Chen Xin grew up loving classical literati aesthetics. Inspired in 2010, he spent three years preparing and launched longyan in January 2023 to create furniture and objects with the spirit of Song-era elegance.',
        'about.style.title': 'longyan style: honoring classics, seeking the new',
        'about.style.body1': 'Drawing from Song-dynasty literati culture, longyan searches for the inner spirit of oriental craft—integrating furniture and objects into tranquil tea rooms and study spaces for a holistic aesthetic.',
        'about.more': 'More',
        'wares.title': 'longyan wares',
        'wares.subtitle': 'Savor the Zen of moonlit pines',
        'furniture.wares.title': 'longyan furniture',
        'furniture.wares.subtitle': 'Every piece is alive with vitality',
        'product.wood': 'Wood',
        'product.ceramic': 'Ceramic',
        'product.glass': 'Glass',
        'product.woodDesc': 'Natural wood, rustic craft, warm vibe',
        'product.ceramicDesc': 'Handcrafted, colorful, tradition meets modern',
        'product.glassDesc': 'Transparent, modern, light and airy',
        'wares.filter.all': 'All',
        'wares.filter.woodTitle': 'Wood',
        'wares.filter.woodSubtitle': 'Natural wood, rustic craft, warm vibe',
        'wares.filter.ceramicTitle': 'Ceramic',
        'wares.filter.ceramicSubtitle': 'Handcrafted feel, rich colors, tradition meets modern',
        'wares.filter.glassTitle': 'Glass',
        'wares.filter.glassSubtitle': 'Transparent, modern, light and airy',
        'testimonial.title': 'Testimonials',
        'nav.careers': 'Careers',
        'careers.heading': 'longyan Careers',
        'careers.title': 'Store Staff Roles',
        'careers.tag.fullpart': 'Full-time · Part-time',
        'careers.tag.tea': 'Tea culture enthusiast',
        'careers.tag.lang': 'Japanese · English',
        'careers.requirements.title': 'Requirements',
        'careers.requirements.one': 'All genders welcome; passion for tea culture',
        'careers.requirements.two': 'Fluent in Japanese and English',
        'careers.requirements.three': 'Japan nationals or permanent residents only',
        'careers.duties.title': 'Responsibilities',
        'careers.duties.one': 'Guest reception',
        'careers.duties.two': 'Cashier',
        'careers.duties.three': 'Opening/closing prep',
        'careers.benefits.title': 'Compensation & benefits',
        'careers.benefits.one': 'Salary: Negotiable',
        'careers.benefits.two': 'Insurance: In line with national laws',
        'careers.benefits.three': 'Vacation: In line with national laws',
        'careers.benefits.four': 'Training: Chinese tea and coffee',
        'footer.findus': 'Find us',
        'footer.reservation': 'Reservation',
        'footer.hours': 'Open Hours',
        'hours.monday': 'Tuesday - Wednesday: Closed',
        'hours.weekdays': 'Thursday - Monday',
        'hours.weekdayHours': '11:00 AM - 5:00 PM',
        'hours.weekend': 'Saturday - Sunday',
        'hours.weekendHours': '11:00 AM - 10:00 PM',
        'furniture.kicker': 'longyan Furniture',
        'furniture.title': 'longyan Furniture',
        'furniture.tagline': 'Every furniture piece feels alive',
        'furniture.title.craft': 'Honoring traditional craft, perfecting every detail',
        'furniture.title.wood': 'We choose solid wood to keep its warm, substantial feel',
        'furniture.intro1': 'We sort through classical forms and set strict requirements so every piece feels alive. Materials and craft are tightly controlled: all wood is FSC-certified and production is BSCI-certified to meet EU social responsibility standards.',
        'furniture.intro2': '"longyan" is a quiet attitude—an inner awakening, a gentle balance like a flower held with a smile or the fleeting feeling of a butterfly dream.',
        'furniture.craft1': 'Mortise-and-tenon is the core of Chinese furniture—often unseen outside but central within. We insist on true joinery, not biscuits or dowels, to carry the tradition. Built to classical precision, chairs sit steady even before glue. Many joints resist mass production, so much work stays hand-made.',
        'furniture.craft2': 'We use solid wood for its warm, breathing quality. Like classical pieces, we frame panels on all sides to manage movement, a labor-intensive approach that keeps table tops stable and reassuring.'
      },
      ja: {
        'nav.home': 'ホーム',
        'nav.about': '朗元について',
        'nav.wares': '朗元文玩器物',
        'nav.furniture': '朗元家具',
        'nav.contact': 'お問い合わせ',
        'nav.call': '今すぐ電話',
        'nav.reserve': '予約する',
        'contact.heading': 'お問い合わせ',
        'contact.address': '京都府京都市左京区浄土寺南田町9番地6',
        'hero1.subtitle': '朗元·LONGYAN',
        'hero1.title': '新しい文人のライフスタイルを提唱',
        'hero1.cta': '朗元について',
        'hero2.subtitle': '朗元器物',
        'hero2.title': '東方の精神を受け継ぎ、器物の雅さを再現',
        'hero2.cta': '器物を見る',
        'hero3.subtitle': '朗元家具',
        'hero3.title': 'すべての家具に生命感を宿す',
        'hero3.cta': '家具を見る',
        'hero4.subtitle': '朗元に参加',
        'hero4.title': '千年の東方美学を現代の日常に届ける仲間を募集',
        'hero4.cta': '募集を見る',
        'about.kicker': '朗元について',
        'about.title': '古物の細部と風趣を味わう',
        'about.body1': '暮らしの空間は家具だけでなく、茶人の茶器や文人の文房具、気韻を宿す一つひとつの器物まで含まれます。朗元は伝世品に学び、その肌理と風趣を味わい、ちょうどよい工芸とデザインで内なる雅趣を呼び覚まし、優雅な空気を再構築します。',
        'about.body2': '朗元の器物は天然素材と古法の技を選び、素朴で艶のある質感を目指します。宋代の器は単色が多く、簡潔で均整がとれた造形と控えめな肌理で内に秘めた美を示しました。その系譜を継ぎ、日常の喧噪に静かな余白を残し、心を安んじる場をつくります。',
        'about.business.kicker': '事業内容',
        'about.business.title': '朗元の主要事業',
        'about.business.body': '企画から製造、展示販売、輸出入まで、朗元は暮らしの美意識を形にする事業を行っています。',
        'about.business.item1': '各種商品の企画、製造、販売及び輸出入',
        'about.business.item2': '美術品、工芸品の展示、販売及び輸出入',
        'about.business.item3': '酒類の販売と輸出入',
        'about.business.item4': '古物営業法に基づく古物商',
        'about.meaning.title': '名称の意味',
        'about.meaning.body1': '「朗元」は、内面から生まれる穏やかな悦びを指し、偏りなく中庸を求める姿勢を表します。',
        'about.meaning.body2': '一輪の花に微笑む仏のように、荘周夢蝶の淡い感覚のように、ふと心が動く瞬間を大切にしています。',
        'about.background.title': 'ブランドの背景',
        'about.background.body1': '創業者・デザインディレクターの陳新は、宋代の文人美学に魅せられ、2023年1月に朗元を立ち上げました。現代の空間に合う家具と器を、伝統の技と精神によって形にしています。',
        'about.style.title': '朗元のスタイル：格古而知新',
        'about.style.body1': '宋代文人文化を源流に、茶室や書斎など静かな空間に調和する家具と器を総合的に探求し、古典の精神を今に生かします。',
        'about.more': '詳細を見る',
        'wares.title': '朗元器物',
        'wares.subtitle': '明月と松の間の禅意を味わう',
        'furniture.wares.title': '朗元家具',
        'furniture.wares.subtitle': '一つひとつが生きているような作品',
        'product.wood': '木製',
        'product.ceramic': '陶器',
        'product.glass': 'ガラス',
        'product.woodDesc': '自然木の風合い、素朴な技、温かみ',
        'product.ceramicDesc': '手仕事感、彩り豊か、伝統とモダン',
        'product.glassDesc': '透明感、モダン、軽やかで動きのある印象',
        'wares.filter.all': 'すべて',
        'wares.filter.woodTitle': '木製',
        'wares.filter.woodSubtitle': '自然木の風合い、素朴な技、温かみ',
        'wares.filter.ceramicTitle': '陶器',
        'wares.filter.ceramicSubtitle': '手仕事感、彩り豊か、伝統とモダン',
        'wares.filter.glassTitle': 'ガラス',
        'wares.filter.glassSubtitle': '透明感、モダン、軽やかで動きのある印象',
        'testimonial.title': 'お客様の声',
        'nav.careers': '採用情報',
        'careers.heading': '朗元採用',
        'careers.title': '店舗スタッフ募集',
        'careers.tag.fullpart': 'フルタイム・パート',
        'careers.tag.tea': 'お茶が好きな方',
        'careers.tag.lang': '日本語・英語',
        'careers.requirements.title': '応募条件',
        'careers.requirements.one': '性別不問、茶文化が好きな方',
        'careers.requirements.two': '日本語・英語が堪能な方',
        'careers.requirements.three': '日本人/永住権をお持ちの方のみ',
        'careers.duties.title': '主な業務',
        'careers.duties.one': 'お客様対応',
        'careers.duties.two': 'レジ対応',
        'careers.duties.three': '開店・閉店準備',
        'careers.benefits.title': '待遇',
        'careers.benefits.one': '給与：応相談',
        'careers.benefits.two': '保険：法令に準じる',
        'careers.benefits.three': '休暇：法令に準じる',
        'careers.benefits.four': '研修：中国茶・コーヒー研修',
        'footer.findus': '所在地',
        'footer.reservation': '予約',
        'footer.hours': '営業時間',
        'hours.monday': '火曜・水曜：定休日',
        'hours.weekdays': '木曜日〜月曜日',
        'hours.weekdayHours': '11:00 AM - 5:00 PM',
        'hours.weekend': '土曜・日曜',
        'hours.weekendHours': '11:00 AM - 10:00 PM',
        'furniture.kicker': '朗元家具',
        'furniture.title': '朗元家具',
        'furniture.tagline': 'すべての家具に生命感を宿す',
        'furniture.title.craft': '伝統の技を守り、細部まで磨き上げる',
        'furniture.title.wood': '無垢材を選び、その温もりと重厚感を活かす',
        'furniture.intro1': '古典の形制を整理し、厳しい基準のもとで調整を重ね、すべての家具に生命感を宿します。素材と工法は徹底管理し、木材はFSC認証を取得し、製造はBSCI認証を取得しており、EUの社会的責任基準に適合しています。',
        'furniture.intro2': '「朗元」は静かな姿勢。中庸を求める内なる悟りであり、拈花微笑や夢蝶のような淡い感覚を大切にします。',
        'furniture.craft1': '中国伝統家具の核心は榫卯（ほぞ組）で、外からは見えなくても最重要。ビスケットやダボではなく本来の榫卯を守り、文化を継承します。古法の精度で組むので、接着前の椅子でもしっかり座れます。多くの工程が機械量産に向かず、手仕事が欠かせません。',
        'furniture.craft2': '温かな質感をもつ無垢材を使用。四方框に芯板を通す伝統構造で木の呼吸に対応し、手間はかかりますが安定した天板を実現します。',
      },
      zh: {
        'nav.home': '首页',
        'nav.about': '关于我们',
        'nav.wares': '朗元器物',
        'nav.furniture': '朗元家具',
        'nav.contact': '联系',
        'nav.call': '立即拨打',
        'nav.reserve': '预订座位',
        'contact.heading': '联系我们',
        'contact.address': '京都府京都市左京区浄土寺南田町9番地6',
        'hero1.subtitle': '朗元·LONGYAN',
        'hero1.title': '倡导新文人生活',
        'hero1.cta': '关于朗元',
        'hero2.subtitle': '朗元器物',
        'hero2.title': '秉承东方精神 再現器物的典雅气息',
        'hero2.cta': '查看器物',
        'hero3.subtitle': '朗元家具',
        'hero3.title': '确保每一件家具都是活着的有生命力的作品',
        'hero3.cta': '查看家具',
        'hero4.subtitle': '加入朗元',
        'hero4.title': '与我们一起，让千年东方美学走进现代日常',
        'hero4.cta': '查看职位',
        'about.kicker': '关于朗元',
        'about.title': '把握每一件古物的细节和韵味',
        'about.body1': '生活空间不止于家具，还有茶人的茶器、文人的文房书宝，以及每一件承载气韵的器物。朗元从传世之物汲取灵感，细味古玩的肌理与韵致，以恰到好处的工艺和设计，唤醒内心的高雅趣味，再造雅致气息。',
        'about.body2': '朗元器物选用天然材质、沿用古法工艺，追求朴素而有光泽的质感。宋代器物多单色、简洁而优美，以匀称的造型、舒适的比例、含蓄的肌理呈现内敛之美。朗元秉承这一脉络，在喧嚣的日常里留一方静谧，让人得以安放自心。',
        'about.business.kicker': '业务范围',
        'about.business.title': '朗元主营业务',
        'about.business.body': '从策划、制造到展示、销售与进出口，朗元围绕生活美学展开以下核心业务：',
        'about.business.item1': '各类商品的企划、制造、销售及进出口',
        'about.business.item2': '美术品、工艺品的展示、销售及进出口',
        'about.business.item3': '酒类的销售与进出口',
        'about.business.item4': '依据古物营业法的古物商业务',
        'about.meaning.title': '名称的意义',
        'about.meaning.body1': '“朗元”象征一种温和而宁静的喜悦，来自内心，对中道的追寻。',
        'about.meaning.body2': '宛如佛典中的拈花一笑，也似庄周梦蝶的恍惚感悟，轻柔而悠远。',
        'about.background.title': '品牌背景',
        'about.background.body1': '创始人兼设计总监陈新自幼热爱文人美学，2023年1月创立朗元，将宋代意趣与当代空间结合，打造雅致器物与家具。',
        'about.style.title': '格古而知新',
        'about.style.body1': '取法宋代文人文化，强调器与空间的整体美学，将古典精神融入现代茶室与书房的静谧氛围。',
        'about.more': '查看更多',
        'wares.title': '朗元文玩器物',
        'wares.subtitle': '品味明月松间的禅意',
        'furniture.wares.title': '朗元家具',
        'furniture.wares.subtitle': '每一件都是活着的有生命力的作品',
        'product.wood': '木质',
        'product.ceramic': '陶瓷',
        'product.glass': '玻璃',
        'product.woodDesc': '原木自然、工艺质朴、温暖风',
        'product.ceramicDesc': '手工感、色彩丰富、传统与现代',
        'product.glassDesc': '通透、现代感、轻盈灵动',
        'wares.filter.all': '全部',
        'wares.filter.woodTitle': '木质',
        'wares.filter.woodSubtitle': '原木自然、工艺质朴、温暖风',
        'wares.filter.ceramicTitle': '陶瓷',
        'wares.filter.ceramicSubtitle': '手工感、色彩丰富、传统与现代',
        'wares.filter.glassTitle': '玻璃',
        'wares.filter.glassSubtitle': '通透、现代感、轻盈灵动',
        'testimonial.title': '顾客见证',
        'nav.careers': '招聘信息',
        'careers.heading': '朗元招聘',
        'careers.title': '店员招聘',
        'careers.tag.fullpart': '全职 · 兼职',
        'careers.tag.tea': '茶文化爱好者',
        'careers.tag.lang': '日语 · 英语',
        'careers.requirements.title': '要求',
        'careers.requirements.one': '男女不限，热爱茶文化',
        'careers.requirements.two': '精通日语、英语',
        'careers.requirements.three': '仅限日本人 / 永住人士',
        'careers.duties.title': '工作内容',
        'careers.duties.one': '客户接待',
        'careers.duties.two': '收银',
        'careers.duties.three': '营业准备',
        'careers.benefits.title': '待遇',
        'careers.benefits.one': '工资：面议',
        'careers.benefits.two': '保险：按照国家法律规定',
        'careers.benefits.three': '休假：按照国家法律规定',
        'careers.benefits.four': '培训：中国茶、咖啡培训',
        'footer.findus': '找到我们',
        'footer.reservation': '预订',
        'footer.hours': '营业时间',
        'hours.monday': '周二、周三：休息',
        'hours.weekdays': '周四至周一',
        'hours.weekdayHours': '11:00 AM - 5:00 PM',
        'hours.weekend': '周六、周日',
        'hours.weekendHours': '11:00 AM - 10:00 PM',
        'furniture.kicker': '朗元家具',
        'furniture.title': '朗元家具',
        'furniture.tagline': '每一件家具都是活着的有生命力',
        'furniture.title.craft': '秉承传统工艺的理念，注重细微之处',
        'furniture.title.wood': '坚持选用纯实木，保留温润厚实的质感',
        'furniture.intro1': '对古典形制进行梳理，对家具进行了严格的要求及调整。为确保每一件家具都是活着的有生命力的作品，朗元的家具无论在原材料的选择上及工艺上都严格把关。所用的木材均获得FSC认证(国际森林认证)，制作过程也获得BSCI认证，符合欧盟社会责任的标准。',
        'furniture.intro2': '“朗元”是一种安静的态度，是源自内心的感悟，是在不偏不倚中追寻中道，一种淡淡的感觉，如同佛经描摹的拈花一笑，一丝轻轻的触动，就像文人叹咏的庄生梦蝶。',
        'furniture.craft1': '中国传统家具工艺的核心在于榫卯结构，虽然外部不着痕迹，但是榫卯却是家具文化最关键的部分。朗元坚持使用纯正的榫卯结构，不仅仅是为了家具的牢固度，更是为了文化的传承。现代家具常用的圆木榫，饼干榫，严格来说并不是真正意义上的传统榫卯。朗元的榫卯结构完全以古人精工细作的标准来要求自己。比如椅子，在试拼装未涂任何胶水时，就已经可以稳稳端坐。因此，朗元家具的多数榫卯并不适合机器大规模生产，需要诸多繁复的手作工序。',
        'furniture.craft2': '朗元家具的选材上坚持使用实木。实木温润厚实的质感是其他材料所无法替代的。实木是一种会呼吸的材料，随着气候的变化会收缩膨胀，所以朗元所有的家具和传统家具一样采用了四边框加芯板穿带的结构，来使桌面稳固，这种结构比现在主流的整板实木桌面要费工许多，却也安心许多。'
      }
    };

    var langStorageKey = 'longyan-preferred-lang';
    var defaultLang = 'ja';
    function getStoredLang() {
      try {
        var stored = localStorage.getItem(langStorageKey);
        if (stored && translations[stored]) {
          return stored;
        }
      } catch (err) {
        // Ignore storage errors and fall back to default
      }
      return null;
    }
    function setStoredLang(lang) {
      try {
        localStorage.setItem(langStorageKey, lang);
      } catch (err) {
        // Ignore storage errors
      }
    }

    var currentLang = getStoredLang() || defaultLang;
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
      setStoredLang(currentLang);
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
      <a href="index.html" class="navbar-brand">朗元<span>.</span>longyan</a>\
    </div>\
    <div class="collapse navbar-collapse">\
      <ul class="nav navbar-nav navbar-nav-first">\
        <li><a href="index.html" data-i18n="nav.home">ホーム</a></li>\
        <li><a href="about.html" data-i18n="nav.about">朗元について</a></li>\
        <li><a href="wares.html" data-i18n="nav.wares">longyan Wares</a></li>\
        <li><a href="furniture.html" data-i18n="nav.furniture">朗元家具</a></li>\
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
            <p><a href="mailto:casachy8@gmail.com">casachy8@gmail.com</a></p>\
          </address>\
        </div>\
      </div>\
      <div class="col-md-4 col-sm-8">\
        <div class="footer-info footer-open-hour">\
          <div class="section-title">\
            <h2 class="wow fadeInUp" data-wow-delay="0.2s" data-i18n="footer.hours">Open Hours</h2>\
          </div>\
          <div class="wow fadeInUp" data-wow-delay="0.4s">\
            <p data-i18n="hours.monday">Tuesday - Wednesday: Closed</p>\
            <div>\
              <strong data-i18n="hours.weekdays">Thursday - Monday</strong>\
              <p data-i18n="hours.weekdayHours">11:00 AM - 5:00 PM</p>\
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

    var contactTemplate = '\
<div class="container">\
  <div class="row contact-row">\
    <div class="wow fadeInUp col-md-6 col-sm-12 contact-map-col" data-wow-delay="0.4s">\
      <div id="google-map" class="contact-map">\
        <iframe class="contact-map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.7693862535345!2d135.7963301195051!3d35.02622652792757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010904fbe5c1e3%3A0x44c4718ccbc2b836!2s9-6%20J%C5%8Ddoji%20Minamidach%C5%8D%2C%20Sakyo%20Ward%2C%20Kyoto%2C%20606-8403!5e0!3m2!1sen!2sjp!4v1764655919648!5m2!1sen!2sjp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\
      </div>\
    </div>\
    <div class="col-md-6 col-sm-12 contact-card-col">\
      <div class="contact-info-card wow fadeInUp" data-wow-delay="0.1s">\
        <div class="section-title contact-title">\
          <h2 data-i18n="contact.heading">联系我们</h2>\
        </div>\
        <div class="contact-info-list">\
          <div class="contact-info-row">\
            <i class="fa fa-map-marker"></i>\
            <div>\
              <strong data-i18n="contact.address">京都府京都市左京区浄土寺南田町9番地6</strong>\
            </div>\
          </div>\
          <div class="contact-info-row">\
            <i class="fa fa-phone"></i>\
            <div>\
              <a href="tel:09098732131">090-9873-2131</a>\
            </div>\
          </div>\
          <div class="contact-info-row">\
            <i class="fa fa-envelope-o"></i>\
            <div>\
              <a href="mailto:casachy8@gmail.com">casachy8@gmail.com</a>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>\
</div>';

    function loadContact() {
      var placeholder = document.getElementById('contact-placeholder');
      if (!placeholder) {
        return Promise.resolve();
      }
      placeholder.innerHTML = contactTemplate;
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
      Promise.all([loadNavbar(), loadFooter(), loadContact()]).then(function() {
        bindNavbarBehavior();
        applyTranslations(currentLang);
      });
      bindWaresFilter();
    });

})(jQuery);
