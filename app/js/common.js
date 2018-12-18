$(function() {

  //
  // Accordion for answer section
  //
  $(document).ready(function() {
      $(".accordion__item > a").first().addClass("active").next().slideDown('500');
      $(".accordion__item > a").on("click", function() {
          if ($(this).hasClass('active')) {
              $(this).removeClass("active");
              $(this).siblings('.accordion__content').slideUp(500);
          } else {
              $(".accordion__item > a").removeClass("active");
              $(this).addClass("active");
              $('.accordion__content').slideUp(500);
              $(this).siblings('.accordion__content').slideDown(500);
          }
      });
  });

  //
  // Tabs 
  //
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  //
  // Vertical tabs 
  //
  $('ul.tabs__caption--vertical').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs--vertical').find('div.tabs__content--vertical').removeClass('active').eq($(this).index()).addClass('active');
  });

  //
  // Slider for section reviews 
  //
  $('.reviews__slider').slick({
      dots: true,
      prevArrow: "<button class='slick-prev2 slick-arrow'></button>",
      nextArrow: "<button class='slick-next2 slick-arrow'></button>"
  });

  //
  // Accordion for card in section program 
  //
  var acc = document.getElementsByClassName("program-card__box-open");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.previousElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

  //
  // Play button for video in section reviews
  //
  $('.reviews__video-play_icon').parent().parent().click(function () {
    if($(this).children(".reviews__video").get(0).paused){
        $(this).children(".reviews__video").get(0).play();   
        $(this).children(".reviews__video-play").fadeOut();
      }else{       
        $(this).children(".reviews__video").get(0).pause();
        $(this).children(".reviews__video-play").fadeIn();
      }
  });

  //
  // Slider for section be-hero
  //
  $('.be-hero__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint:1200,
        settings:{
          slidesToShow:3
        }
      },
      {
        breakpoint:992,
        settings:{
          slidesToShow:2
        }
      },
      {
        breakpoint:576,
        settings:{
          centerMode:true,
          slidesToShow:1,
          centerPadding:'110px'
        }
      },
      {
        breakpoint:540,
        settings:{
          centerMode:true,
          slidesToShow:1,
          centerPadding:'50px'
        }
      },
      {
        breakpoint:390,
        settings:{
          centerMode:true,
          slidesToShow:1,
          centerPadding:'40px'
        }
      }
    ]
  });



  //
  // Slider for section experts
  //
  $('.experts__slider').slick({
      dots: true,
      infinite: true
  });

  //
  // Accordion for section seo 
  //       
  var acc = document.getElementsByClassName("seo__title");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

  //
  // Open video in expert block for section experts
  //      
  $(".expert__video").on("click", function(){
    var videoExpert = $(this).attr('data-video');
    $('#' + videoExpert).addClass("active");
    $('#' + videoExpert).children().addClass("active"); 
  });
    
  //
  // Stop video after close popup with video in expert block for section experts
  //    
  $(".popup-close, .popup-overlay").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active");
    $('.popup-video')[0].pause();
    $('.popup-video')[1].pause();
  });

  //
  // Show search form in header
  //  
  $(".search__icon").on("click", function(){
    $(".search").toggleClass('active');
  });

  //
  // Show side menu after click
  //  
  $(".side-menu__open").on("click", function(){
    $('.popup-overlay').addClass("active");
    $(".side-menu").animate({left: 0}, 500);
    $("body").css("overflow-y", "hidden");
  });

  //
  // Hide side menu after click
  //  
  $(".side-menu__close, .popup-overlay").on("click", function(){
    $('.popup-overlay').removeClass("active");
    $(".side-menu").animate({left: -375}, 500);
    $("body").css("overflow-y", "visible");
  });

  //
  // Hide side menu after swipe left
  //  
  $(".side-menu").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
      $('.popup-overlay').removeClass("active");
      $(".side-menu").animate({left: -375}, 500);
      $("body").css("overflow-y", "visible");
    }
  });

  //
  // Accordion for list in side menu 
  //       
  var acc = document.getElementsByClassName("side-menu__nav-accordion-open");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

  //
  // Ajax form for request checklist
  // 
  $(".checklist").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/checklist.php",
      data: th.serialize()
    }).done(function() {
      $(th).find('.done').addClass('active');
      setTimeout(function() {
        $(th).find('.done').removeClass('active');
        th.trigger("reset");
      }, 2000);
    });
    return false;
  });

  //
  // Ajax form for reserved
  // 
  $(".reserve__form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/reserve.php",
      data: th.serialize()
    }).done(function() {
      $(th).find('.done').addClass('active');
      setTimeout(function() {
        $(th).find('.done').removeClass('active');
        th.trigger("reset");
      }, 2000);
    });
    return false;
  });

  //
  // Ajax form for newsletter
  // 
  $(".newsletter__form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/newsletter.php",
      data: th.serialize()
    }).done(function() {
      $(th).find('.done').addClass('active');
      setTimeout(function() {
        $(th).find('.done').removeClass('active');
        th.trigger("reset");
      }, 2000);
    });
    return false;
  });
  
});



