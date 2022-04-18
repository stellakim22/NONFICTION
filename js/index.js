$(document).ready(function(){
    media();
    function media(){
      var windowWidth = $(window).width();
      if(windowWidth >= 1200){
        AOS.init();

  
        //풀페이지 플러그인
        new fullpage('#wrap',{
          anchors:['firstPage','secondPage','3rdPage','4rdPage','5rdPage','6rdPage'],
          scrollBar:true,
        });


          //서브메뉴
        $('.menu li').mouseenter(function(){
          $(this).addClass('active');
          $(this).siblings().removeClass('active');

          var result = $(this).attr('data-alt');
          $('.sub-menu').removeClass('active');

          $('#' + result).addClass('active');

          $('.sub-menu-box').stop().slideDown().addClass('active');

        });


        $('.sub-menu-box').mouseleave(function(){
          //서브메뉴박스에서 마우스리브될때 박스 없어짐
          $('.sub-menu').removeClass('active');
  
          $(this).stop().slideUp().removeClass('active');
        });


        




        $('.inner-gallery').mouseenter(function(){
          var changeImage = $(this).attr('data-image');
          $('.fade-gallery-photo').css({
            'background-image' : 'url(' + changeImage + ')'
          }); 
        });
        $('.inner-gallery').mouseleave(function(){
          $('.fade-gallery-photo').css({
            'background-image' : ''
          }); 
        });
  
      }else{
        AOS.init();


        //배너스와이퍼
        var swiper = new Swiper(".mySwiper", {
          loop:true,
          effect:"fade",
          autoplay:{
              delay: 2500
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
  
        //스크롤바 추가
        // $(window).scroll(function(){
        //   if($(window).scrollTop() >= 300){
        //     $('.header-area').addClass('active');
        //     $('.header-logo').addClass('active');
  
        //   }else{
        //     $('.header-area').removeClass('active');
        //     $('.header-logo').removeClass('active');
  
        //   }
        // });
  
        //햄버거버튼
        $('#hamburger').click(function(){
          $('#hamburger').toggleClass('active');
          $('nav').toggleClass('active');
          
        });
        
        
      }
    }
  
  
  
  });//end