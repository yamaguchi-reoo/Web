/************************************
 ジャンケンゲームを作る（関数なし）
*************************************/
//＜ジャンケンの手の番号を設定＞
function Janken() {
    //＜「const」で変数宣言することで、define的な定数の使い方をする＞
    //GUという変数を宣言、1を格納する
    //CHOKIという変数を宣言、2を格納する
    //PAという変数を宣言、3を格納する

    const GU = 1;
    const CHOKI = 2;
    const PA = 3;

    function GetHumHand() {
        //＜ジャンケンの入力ダイアログボックスを表示＞
        let hum = prompt('半角数字で1～3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー'); //1:グー、2:チョキ、3:パーと、対応する変数と組み合わせて表示する。\nは改行コードなので、文字として扱う
        hum = parseInt(hum, 10);     //入力文字を整数に変換（第2引数は「基数」を設定。基数は2進数・16進数の数字のところをさす。ここでは10進数を指定する）

        if (hum !== GU && hum !== CHOKI && hum !== PA) {
            //入力値が1、2、3出なかった場合、「undefined」（未定義の意味のデータ型）を返す
            return undefined;
        }
        else {
            // 1、2、3が入力されていたら、「hum」を戻り値として返す
            return hum;
        }
    }

    function GetComHand() {
        //コンピュータの手を決める
        //変数「com」を宣言。Math.randomに最大数をかける→Math.floorで整数値を返す（小数点を出さないようにする）。+1で、1～3の整数を決める。値を直接「com」に代入する。
        return Math.floor(Math.random() * 3) + 1;
    }

    function GetHandName(num) {
        //＜コンピュータの手の名前＞
        //コンピュータの手を文字列として格納する変数「comHandName」を宣言。初期化のために0を代入
        //switch文で、コンピュータの手を判定する
        switch (num) {
            //GUならグーの文字列をcomHandNameに格納
            case GU:
                return 'グー';
            //CHOKIならチョキの文字列をcomHandNameに格納
            case CHOKI:
                return 'チョキ';
            //PAならパーの文字列をcomHandNameに格納
            case PA:
                return 'パー';
        }
    }

    function GetResult(com, hum) {
        //＜結果の判定＞

        //if文での判定。人間とコンピュータの手が一緒なら…
        if (hum == com) {
            return '結果は「あいこ」。';        //結果の変数にあいこの文字列を格納
        }
        else if (hum == GU && com == CHOKI || hum == CHOKI && com == PA || hum == PA && com == GU) {
            //else if文で、自分の手がコンピュータに勝つパターンなら…
            return '勝ったぞ、やったね';        //結果の変数に勝ったという文字列を格納
        }
        else {
            //上記のどれでもなかったら…
            return '負けた、ズコー';         //結果の変数に負けたという文字列を格納
        }
    }

    function GetResultMsg(com, hum) {
        ////＜最終的な結果の表示＞
        //if (hum > 0 && hum < 4) {
        //    GetResult(com, hum) = GetResult(com, hum) + 'コンピュータの出した手は「' + GetHandName( + '」だったよ';  //msgResult変数に、msgResult+コンピュータの出した手をcomHandNameと組み合わせて格納する
        //    alert(msgResult);   //アラートで、msgResultを表示させる
        //}
        return GetResult(com, hum) + 'コンピュータの出した手は「' + GetHandName(com) + '」だったよ';
    }

    // 人間の手を取得
    let hum = GetHumHand();


    if (!hum) {
        alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます');  //アラートで再読み込みの文章を表示
    }
    else {
         //コンピュータの手を取得
        let com = GetComHand();
        // 結果を表示
        alert(GetResultMsg(com, hum));
        return GetResult(com, hum);
    }
} 

let isLose = false;
let win = 0;

while (!isLose) {
    //関数呼び出し
   let result = Janken();

    if (result === '結果は「あいこ」。') {
        continue;
    }
    else if (result === '勝ったぞ、やったね') {
        win++;
        alert(win + '連勝中');
        continue;
    }
    alert('連勝ストップ、記録は「' + win + '」勝');
    isLose = true;
    break;
}


