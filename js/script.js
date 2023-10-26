'use strict';

//隠れ課題　その1
//#menu-btnをクリックしたとき、#gnaviにクラス名の[open]がついていなければ追加、すでにあれば削除
//#menu-btnをクリックしたとき、#menu-btnにクラス名の[class]がついていなければ追加、すでにあれば削除   （ハンバーガーメニュー開く　閉じたときに×にする）
//チャプター４、１０４ページ以降 　テスト！！！！

const menuBtn = document.querySelector('#menu-btn');
const gnavi = document.querySelector('#gnavi');

menuBtn.addEventListener('click', (e) => {
    gnavi.classList.toggle('open');
e.currentTarget.classList.toggle( 'close' );
});


//隠れ課題　その２
// 上から300以上スクロールしたら#page-top,にopenを(クラス名)追加し、300未満の時は、openを外す
const getScrollY = () => {
    const scrolled = window.scrollY;
    const pageTop = document.querySelector('#page-top');
    // console.log(scrolled);

    if (scrolled >= 300) {
        pageTop.classList.add('open');
    } else {
        pageTop.classList.remove('open');
    }
};

window.addEventListener('scroll',getScrollY);

//課題１今日は何曜日？
// formの取得
const whatDay = document.querySelector('#what-day');

//送信イベント
whatDay.addEventListener('submit', ( e ) => {
    //初期動作のキャンセル
    e.preventDefault();

    //console.log('送信した');
    
    //入力内容の取得
    const year = whatDay.year.value;
    const month = whatDay.month.value;
    const date = whatDay.date.value;

    //日付用
    const now = new Date(year, month-1, date);

    // 曜日の取得
    const dayList = ['日','月','火','水','木','金','土',];
    const day = now.getDay();

    //#A-01に「　年　月　日」と表示
    document.querySelector('#A-01').textContent = `${year}年${month}月${date}日`;
    //#A-02に「　曜日」と表示
    document.querySelector('#A-02').textContent = `${dayList[day]}曜日`;
    // console.log( year, month, date);
    // console.log( now );
});

//課題２ あなたのBMIは？
// idの取得
const whatBmi = document.querySelector('#what-bmi');


//送信イベント
whatBmi.addEventListener('submit', ( e ) => {
    //初期動作のキャンセル
    e.preventDefault();
    //console.log('送信した');

    //入力内容の取得
    const kg = whatBmi.kg.value;
    const m = (whatBmi.cm.value) /100; //mで取得
    // console.log('${kg}kgと${m}m');

    // 計算
    const bmi = Math.floor( (kg / (m * m)) * 10 ) /10;

    //計算結果からメッセージを作成
    //25以上 肥満気味・18.5～24.9 標準・18.5未満 痩せすぎ
    let message = ''; //メッセージ用の入れ物
    if (bmi >= 25) {
        message = '肥満気味';
    } else if ( bmi >= 18.5 ){
        message = '標準';
    } else {
        message = '瘦せすぎ';
    }
    //結果表示
    document.querySelector('#A-03').textContent = bmi;
    document.querySelector('#A-04').textContent = message;
    // console.log(bmi);
});

// 課題３　タブをクリックして表示内容を切り替える
//vanilla Jsの場合
// const tabs = document.querySelectorAll('.tab-link');
// const sections = document.querySelectorAll('.tab-sec');

// tabs.forEach( (tab) => {
//     tab.addEventListener('click', (e) => {
//         // console.log('クリック');

//         //すべてのsectionから.openをはずす
//         sections.forEach( (sec) => {
//             sec.classList.remove('open');
//         });

//         //すべてのtabから.openをはずす
//         tabs.forEach( (tab) => {
//             tab.classList.remove('open');
//         });

//         //クリックした要素に.openをつける
//         e.target.classList.add('open');

//         //sectionに.openをつける
//         const tabDate = e.target.dataset.tab;
//         document.querySelector(`#${tabDate}`).classList.add('open');

//         //console.log(tabDate);
//     });
// } );


//jQueryの場合
$('.tab-link').on('click', (e) => {
    $('.tab-link, .tab-sec').removeClass( 'open' );

    const tabTarget = $(e.target); //クリックした要素
    tabTarget.addClass('open');
    $( `#${tabTarget.data('tab')}` ).addClass('open');
});

//課題４　カルーセルスライドショーをつくってみよう

  
