/**
 * const,let等の変数宣言
 */

// var val1 ="var変数";
//  console.log(val1);

//  //var変数は上書き可能

//  val1 ="var変数を上書き";
//  console.log(val1);

//  //var変数は再宣言可能
//  var val1 ="var変数を再宣言";
//  console.log(val1);

// let val2 ='let変数';
// console.log(val2);

// letは再宣言が不可能・上書き可能

// const変数は上書き・再宣言できない

// constはオブジェクトの中だと上書きが可能

// const val4 = {
//   name:"neko",
//   age:14,
// };
// val4.name="inu";
// val4.address="kagoshima"
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird;";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列

// const name = "jyake";
// const age = 28;
// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// // アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// 注意点あり
// ・かっこがなくてもOK
// ・中の処理が単一の場合はreturnを書く必要がなくなる

/** 分割代入*/
// ↓オブジェクト
// const myProfile = {
//   name: "yuko",
//   age:28,
// };
// const message2 =`名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message2);

// const { name, age } = myProfile;
// const message3 =`名前は${name}です。年齢は${age}です。`;
// console.log(message3);

// ↓配列の場合

// const myProfile =['yuko',28];

// const message4 =`名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`
// console.log(message4);

// const [name,age] =myProfile;
// const message5 = `名前は${name}です。年齢は${age}です。`;
// console.log(message5);

/**デフォルト値 ゲストがデフォルト*/

// const sayHello = (name="ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello();

/**
 * スプレッド構文...
 */

// 配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc =(num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる

// const arr2 =[1,2,3,4,5];
// // const [num1,num2,num3,num4,num5]=arr2; →めんどくさい。。。
// const [num1,num2,...arr3]=arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// console.log(...arr3);

// 配列のコピーや結合(=でコピーしてしまうと参照元まで値が変化してしまう。)
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 =[...arr4, ...arr5];
// console.log(arr7);

// /* Map,filterを使った配列処理
const nameArr = ["tanaka", "yama", "yuko"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name)=> {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name,index) => console.log(`${index + 1}番目は${name}です。`));

// 配列をループして処理する。

// const numArr =[1,2,3,4,5];
// const newNumArr =numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "yuko") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

// /*参考演算子→ifを書く必要がない
// ある条件？条件がTrueの時：条件がfalseの時

const val1 = 1 > 0 ? "true" : "false";
console.log(val1);

const num = "1300";
console.log(num.toLocaleString());
// toLocaleString3ずつで区切る

const formatteNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
console.log(formatteNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100 over" : "OK";
};

console.log(checkSum(50, 40));

/**論理演算しについて */

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か２はTrueになる");
}
if (flag1 && flag2) {
  console.log("1も２もTrueになる");
}

// ||は左側がfalseなら右側を返す
const num5 = 100;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がTrueなら右側を返す
const num2 = 100;
const fee2 = num && "何か設定されました";
console.log(fee2);
