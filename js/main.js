$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
      $("#header,#container").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
      $("#header,#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
  });



  // 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    // 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');
    // 画面外に出たらfadeUpというクラス名を外す
    }
    });
    
    }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
    
    // 画面をスクロールをしたら動かしたい場合の記述
      $(window).scroll(function (){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面をスクロールをしたら動かしたい場合の記述
    
    // 画面が読み込まれたらすぐに動かしたい場合の記述
      $(window).on('load', function(){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
    
              const FixedAnimation = () => {
            // // 動きの起点は、画面をスクロールした時に一定の高さ以上でイベントを発生させること
            // ヘッダーの高さよりスクロール下高さの方が大きい時にイベントを発生させる
            let headerHeight = $('#header').outerHeight(); // id="header"の高さを取得
            let scroll = $(window).scrollTop();// スクロール値
            // 高さの比較で結果を分岐する
            if(scroll >= headerHeight) {
                // スクロール値がヘッダーの高さより大きい時
                // openbtnにfadeinクラス名を付与
                $('.openbtn').addClass('fadein');
            } else{
                $('.openbtn').removeClass('fadein')
            }
        }

        // ↑動きの詳細をまとめた関数
        
        // ↓動かすタイミング
        // タイミング１
        // 画面をスクロールした時に動かす
        $(window).scroll(()=>{
            FixedAnimation();
        });

        // タイミング２
        // ページを読みこんだ時に動かす
        $(window).on('load',() =>{
            FixedAnimation();
        })


        
        // 戻るボタン
        function backAnimation(){
          
          $(window).on('scroll',function(){
          let widowHeight = $('#top').offset().top; 
          let scroll = $(window).scrollTop();
              if(scroll >= widowHeight) {
                  $('.backbtn').addClass('fadein');
              } else{
                  $('.backbtn').removeClass('fadein');
                  $('.backbtn').addClass('fadeout');

              }
          })
      }
      // ↑動きの詳細をまとめた関数
      
      // ↓動かすタイミング
      // タイミング２
      // ページを読みこんだ時に動かす
      $(window).on('load',() =>{
          backAnimation();
      })
            
    