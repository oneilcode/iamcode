$(document).ready(function () {

   var flag = 0;
   $('.main--lang').click(function () {
      console.log('123');
      if (flag == 0) {
         flag = 1;
      } else {
         flag = 0;
      }
      $('.header__lang').toggleClass('active');
   });



   $('.eng').click(function () {
      $('.header__lang__item:nth-child(1) span').text('EN');
      $('.form-idea').html('Your idea');
      $('.form-email').html('E-mail');
      $('.form-btn').html('Sign in');
      $('.portfolio__item-text').html('Go to site page');
      $('#label').html('I agree to the processing of personal data');
      $('#m-1').html('&lt / &gt');
      // $('#m-2').html('FLEXY MOBILE');
      $('.menu__link_about').html('ABOUT ME');
      $('.menu__link_skills').html('SKILLS');
      $('.menu__link_portfolio').html('PORTFOLIO');
      $('.menu__link_contacts').html('CONTACTS');
      $('#m-7').html('Viktoriia O`Neil');
      $('#m-8').html('Web-developer');
      $('#m-9').html('CONTACTS');
      $('#l-1').html('About me');
      $('#l-2').html('Hi there :)');
      $('#l-3').html('My name is Vika and I`m a junior Frontend developer and HTML coder');
      $('#l-4').html('I am interested in front-end development and learning new layout technologies');
      $('#l-5').html('Interested in long-term growth and further development as a developer in the middle level of front-end development');
      // $('#l-6').html('We are ready to implement the most unusual ideas with the most promising people!');
      // $('#l-7').html('Flexy Team - this is many years of experience, unlimited budgets and constant development. There are no analogues of such teams on the market!');
      // $('#l-8').html('For more than 10 years, our team has consistently been in the tops of the leaders in arbitrage traffic. During this time, we have gained vast experience and skillfully work with almost all traffic sources, we know all the subtleties and pitfalls.');
      // $('#l-9').html('Affiliate marketing');
      // $('#l-10').html('Arbitration team');
      $('#l-11').html('Portfolio');
      // $('#l-12').html('We strive to maximize the KPI of each employee, we stand for long-term partnerships and do not support staff turnover.');
      // $('#l-13').html('We have our own technical development department, so we do not experience any problems with apps, as happens in other arbitrage companies.');
      // $('#l-14').html('We guarantee reliable traffic schemes, production bundles, process automation, consumables, infrastructure, the best conditions on the market and unlimited budgets.');
      // $('#l-15').html('The most important thing is the invaluable experience of working with some of the top specialists in the field of traffic arbitrage. ');
      // $('#l-16').html('IDEAS');
      // $('#l-17').html('We are open <br> to new <br> ideas');
      // $('#l-18').html('To stay the best, you need to constantly develop! Our team is ready to support indie developers and small studios on mutually beneficial terms.');
      // $('#l-19').html('From us:');
      // $('#l-20').html('Infrastructure');
      // $('#l-21').html('Expertise');
      // $('#l-22').html('Marketing ');
      // $('#l-23').html('Investment');
      // $('#l-24').html('From you:');
      // $('#l-25').html('Ideas');
      // $('#l-26').html('Product ');
      // $('#l-27').html('Burning eyes');
      // $('#l-28').html('You can contact us or <br> fill out the application here');
      // $('#l-29 input::placeholder').html('E-mail');
      // $('#l-31').html('WORKING WITH US');
      $('#l-32').html('Skills');
      $('#l-33').html('I am also interested in the back-end component of the site, but first I plan to thoroughly study front-end development to look for a new direction to explore.');
      $('#l-34').html("HTML5, CSS3, JavaScript, jQuery");
      $('#l-35').html('Friendly management style');
      $('#l-36').html("CSS/JS animation");
      $('#l-37').html("SASS/SCSS/LESS");
      $('#l-38').html("Layout using BEM technology");
      $('#l-39').html("SEO website optimization");
      $('#l-40').html("Integration of layout on Word Press");
      $('#l-41').html("Git");
      $('#l-42').html("Webpack");
      $('#l-43').html("Contacts");
      $('#l-45').html("Bootstrap");
      if (flag == 0) {
         flag = 1;
      } else {
         flag = 0;
      }
      $('.header__lang').toggleClass('active');
   });
   $('.ru').click(function () {
      $('.header__lang__item:nth-child(1) span').text('RU');
      $('.form-idea').html('Расскажите о вашей идеи');
      $('.form-email').html('Ваша почта');
      $('.form-btn').html('Отправить');
      $('#label').html('Я согласен(а) на обработку моих персональных данных.');
      $('#m-1').html('&lt / &gt');
      // $('#m-2').html('FLEXY MOBILE');
      $('.menu__link_about').html('ОБО МНЕ');
      $('.menu__link_skills').html('МОИ НАВЫКИ');
      $('.menu__link_portfolio').html('ПОРТФОЛИО');
      $('.menu__link_contacts').html('КОНТАКТЫ');
      $('#m-7').html('Виктория О`Нил');
      $('#m-8').html('Веб-разработчик');
      // $('#m-9').html('КОНТАКТЫ');
      $('#l-1').html('Обо мне');
      $('#l-2').html(' Привет :)');

      $('#l-3').html('Меня зовут Вика и я junior Frontend-разрабтчик и HTML-верстальщик');
      $('#l-4').html('Интересуюсь областью front-end разработки, изучением новых технологии верстки, а также взаимосвязью с CMS');
      $('#l-5').html(' Интересует перспективный рост и дальнейшее развитие до разработчика middle уровня front-end разработки');
      // $('#l-6').html('Мы готовы реализовывать самые необычные идеи с самыми перспективными людьми!');
      // $('#l-7').html('<span class="yellow">Flexy Team</span> - это многолетий опыт, безлимитные бюджеты и постоянное развитие. Аналогов таких команд на рынке нет!');
      // $('#l-8').html('Наша команда более 10 лет стабильно находится в топах лидеров арбитражного трафика. За это время мы приобрели огромный опыт и умело работаем практически со всеми источниками трафика, знаем все тонкости и подводные камни.');
      // $('#l-9').html('Партнерский маркетинг');
      // $('#l-10').html('Арбитражная команда');
      $('#l-11').html('Портфолио');
      // $('#l-12').html('Мы нацелены на максимальное повышение КПД каждого сотрудника, выступаем за долгосрочные партнерские отношения и не плодим текучку кадров.');
      // $('#l-13').html('Мы располагаем собственным техническим отделом разработки, поэтому не испытываем никаких проблем в приложениях, как это случается в других арбитражных компаниях.');
      // $('#l-14').html('Мы гарантируем проверенные схемы отлива, продакшен связок, автоматизацию процессов, расходники, инфраструктуру, лучшие условия на рынке и неограниченные бюджеты');
      // $('#l-15').html('Самое главное - это бесценный опыт работы с одними из самых топовых специалистов в сфере арбитража трафика.');
      // $('#l-16').html('идеи');
      // $('#l-17').html('Мы открыты для новых идей');
      // $('#l-18').html('Чтобы оставаться лучшими - нужно постоянно развиваться! Наша команда готовы поддержать инди разработчиков и небольшие студии на взаимовыгодных условиях.');
      // $('#l-19').html('от нас');
      // $('#l-20').html('Инфраструктура');
      // $('#l-21').html('Экспертиза');
      // $('#l-22').html('Маркетинг');
      // $('#l-23').html('Инвестиции');
      // $('#l-24').html('от вас');
      // $('#l-25').html('Идеи');
      // $('#l-26').html('Продукт');
      // $('#l-27').html('Горящие глаза');
      // $('#l-28').html('Можно связаться с нами или <br> оставить заявку тут');
      // $('#l-29 input::placeholder').html('Ваша почта');
      // $('#l-31').html('Skills');
      $('#l-32').html(' Мои навыки');
      $('#l-33').html(' Меня также интересует back-end составляющая сайта, но для начала планирую досконально изучить front-end разработку, чтобы искать новое направление для изучения.');
      $('#l-34').html(' HTML5, CSS3, JavaScript, jQuery');
      $('#l-35').html('Демократичный стиль управления');
      $('#l-36').html('CSS/JS анимация сайтов');
      $('#l-37').html('Препроцессор SASS/SCSS/LESS');
      $('#l-38').html('Верстка по технологии БЭМ');
      $('#l-39').html('Внутренняя SEO оптимизация сайта');
      $('#l-40').html('Git');
      $('#l-41').html('Webpack');
      $('#l-45').html("Bootstrap");
      // $('#l-40').html('Наши контакты');
      // $('#l-40').html('Телефон');
      if (flag == 0) {
         flag = 1;
      } else {
         flag = 0;
      }
      $('.header__lang').toggleClass('active');
   });



});


var scrolled;
window.onscroll = function () {
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
   if (scrolled > 400) {
      $(".header-menu").css({
         "background": "#1b202f"
      })
   }
   if (400 > scrolled) {
      $(".header-menu").css({
         "background": "transparent"
      })
   }

}