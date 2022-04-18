$(document).ready(function () {
  var showSkill = false;

  //[錨點滑動效果]-----------------------------------
  $(".scrollTop").click(function (e) {
    //取消原來設地錨點效果
    e.preventDefault();

    //this 指當前被點擊的scrollTop
    var target = $(this).attr("href");

    //offset()得當前元素的位置偏移值，top：由上面往下算 =取得該元素位置的 y 軸座標
    var targetPos = $(target).offset().top;
    console.log(target, targetPos);

    //點擊滾動到對應位置
    $("html, body").animate({ scrollTop: targetPos }, 1000);
  });

  //[在滾動視窗的時候套用function 把滾動的值讀出來]-----------------------------------
  $(window).scroll(function () {
    //  console.log('scroll');

    //scrollTop 可以設置和獲取元素被向上捲動的高度(pixels)
    var scrollPos = $(window).scrollTop();

    //height():元素的高度
    var windowHeight = $(window).height();
    console.log(scrollPos, windowHeight);

    //每次滾動都把三個href值讀出來
    $(".scrollTop").each(function () {
      //被點擊到選單
      var target = $(this).attr("href");

      //三個座標值讀出來
      var targetPos = $(target).offset().top;

      //目標高度讀出來 outerHeight()
      //outerHeight 包含padding範圍  height 不適完整高度不包含padding
      var targetHeight = $(target).outerHeight();
    //   console.log(target, targetPos, targetHeight);


    //判斷 是不是在指定範圍內 有沒有滑超出範圍 滑動到對應位置選單下面出現綠色
    if(targetPos -1 <= scrollPos && (targetPos + targetHeight) > scrollPos){
        console.log(target);
        //滑動到對應位置選單下面出現綠色 一開始都先移除避免重複
        $('.scrollTop').removeClass('active');
        $(this).addClass('active');
      }else{
        //不在範圍內不加入綠色
        $(this).removeClass('active');
      }


   //animated滑動到特定位置時才出現
   $('.animated').each(function(){
    //取得每個animated位置的 y 軸座標
    var thisPos = $(this).offset().top;
    // console.log('animated', thisPos);
    
    //window高度+滾動位置 大於目前位置執行{}
    if((windowHeight + scrollPos) >= thisPos){
      // console.log('animate');
      $(this).addClass('fadeIn');
    }
  });


    });

  });
});
