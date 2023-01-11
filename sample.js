// じゃんけんで入力してもらうプロンプトを作成
let user_hand=prompt("じゃんけんの手を、グー、チョキ、パーから選んでください。");
  while((user_hand!="グー") && (user_hand!="チョキ") && (user_hand!="パー") && (user_hand!=null)){
    alert("グー、チョキ、パーのいずれかを選んでください。");
    user_hand=prompt("じゃんけんの手を、グー、チョキ、パーから選んでください。");
  }

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand=getJShand();

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge=winlose(user_hand, js_hand);

// 結果を表示する
if (user_hand!=null){
  alert("あなたの選んだ手は" + user_hand + "です。\nJavaScriptの選んだ手は、" + js_hand + "です。\n "+ judge + "です。");
} else  {
  alert("またチャレンジしてね")
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num=Math.floor(Math.random()*3);
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

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winlose(user, js){
  let winloseStr;

  if(user=="グー"){
    if(js=="グー"){
      winloseStr="あいこ";
    } else if(js=="チョキ"){
      winloseStr="あなたの勝ち";
    } else if (js=="パー"){
      winloseStr="あなたの負け";
    }
  } else if(user=='チョキ'){
      if (js=="グー"){
        winloseStr="あなたの負け";
      } else if (js=="チョキ"){
        winloseStr="あいこ";
      } else if (js=="パー"){
        winloseStr="あなたの勝ち";
      }
  } else if(user=="パー"){
      if (js=="グー"){
        winloseStr="あなたの勝ち";
      } else if (js=="チョキ"){
        winloseStr="あなたの負け";
      } else if (js=="パー"){
        winloseStr="あいこ";
      }
    }

    return winloseStr;
}

