// じゃんけんで入力してもらうプロンプトを作成
let user_hand=prompt('じゃんけんの手を、グー、チョキ、パーの中から選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand=get.JShand();

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge=winlose(user_hand, js_hand);

// 結果を表示する
alert("あなやの選んだ手は、" + user_hand,+ "\nJavaScriptの選んだ手は" + js_hand + "です。\n結果は" + judge + "です。");

// ランダムでじゃんけんの手を作成する関数
function get.JShand(){
  let js_hand==Math.floor(Math.ramdom()*3);
  let hand_name;

  if (js_hand_num==0){
    hand_name="グー";
  } else if (js_hand_num==1){
    hand_name="チョキ";
  } else if (js_hand_num==2){
    hand_name="パー";
  }

  return hand_name;
}

ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winlose(user, js){
  let winloseStr;

  if(user=="グー"){
    if(js=="グー"){
      winloseStr="あいこ";
    } else if(js=="チョキ"){
      winloseStr="勝ち";
    } else if (js=="パー"){
      winloseStr="負け";
    }
  } else if(user=='チョキ'){
      if (js=="グー"){
        winloseStr="負け";
      } else if (js=="チョキ"){
        winloseStr="あいこ";
      } else if (js=="パー"){
        winloseStr="勝ち"
      }
  } else if(user=="パー"){
      if (js=="グー"){
        winloseStr="勝ち";
      } else if (js=="チョキ"){
        winloseStr="負け";
      } else if (js=="パー"){
        winloseStr="あいこ";
      }
    }

    return winloseStr;
}

