$(function(){

  $("#intro p").hide().fadeIn(1000)
  //setTimeout(introAnime,2000);//2秒経った時にintroAnimeを実行
  $("#intro").on("click",introAnime)//クリックしたらintroAnimeを実行

  function introAnime(){//jqueryでフェードアウト、終わったらcontentAnime実行
    $("#intro").fadeOut(1000,contentAnime);
  }

  function contentAnime(){
    setTimeout(backAnime,300);//0.3秒後backAnime実行
    setTimeout(personAnime,2000);//2秒後personAnime実行
    setTimeout(carAnime,2000);//2秒後carAnime実行
    setTimeout(foodAnime,3000);//3秒後foodAnime実行
  }
  
  //以下のアニメはCSSでやってみる
  //ここではanimeクラスつけるだけ
  function backAnime(){
    $("#back").addClass("anime")
  }

  function personAnime(){
    $("#person").addClass("anime")
  }

  function carAnime(){
    $("#car").addClass("anime")
  }

  function foodAnime(){
    $("#food").addClass("anime")
  }

  function slideAnime() {
    //テキストが左から右に流れるアニメーション
    $('.leftAnime').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
     //要素がスクロール位置まできたら   
      if (scroll >= elemPos - windowHeight) {
        //クラス付与
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft"); 
      } else {
        //クラス削除
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
  
      }
    });
  
  }
  
  //スクロールしたらアニメーションさせる
  $(window).scroll(function () {
    slideAnime();
  });
  // ページが読み込まれたらアニメーションさせる
  $(window).on('load', function () {
    slideAnime();
  });

  
/*
Background Gradients From -- 
https://uigradients.com
*/

})