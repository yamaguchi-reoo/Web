//プログラムで使用する変数
//フォームを取得
let button = document.getElementById('button');
let form = document.getElementById('form');
let texterea = document.getElementById('texterea');

//文字列制限
let maxTextNum = texterea.getAttribute('maxlength');

//残り時間
let reminingTimeNum = 10;

//要素を追加
//残りの文字数を表示する要素の追加
let textMessage = document.createElement('div');
let parent = texterea.parentElement;
parent.insertBefore(textMessage, texterea);

//残り時間を表示する要素の追加
let timeMessage = document.createElement('div');
parent.insertBefore(timeMessage, null);


//テキストエリアでキーをタイプしたとき
texterea.addEventListener('keyup', function () {
    let currentTextNum = texterea.value.length;
    textMessage.innerHTML = '<p>あと「' + (maxTextNum - currentTextNum) + '」文字入力できます。</p>';
})

//イベントの処理
//お問い合わせボタンを押したとき
button.addEventListener('click', function () {
    //フォームを表示
    form.style.display = 'block';

    //タイマー処理で残り時間を表示
    let timerId = setInterval(function () {
        timeMessage.innerHTML = '<p>制限時間 : ' + reminingTimeNum + '秒</p>';
        if (reminingTimeNum <= 0) {
            alert('制限時間終了');
            clearInterval(timerId);
        }
        reminingTimeNum--;
    }, 1000);
});