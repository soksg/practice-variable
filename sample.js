var str="web" //グローバルスコープ

function foo(){
  console.log(str)
  var y="hello" //関数スコープ
}

foo()
console.log(y)//関数スコープガイのため、エラーとなる