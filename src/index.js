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

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird;";
val5.push("monkey");
console.log(val5);

// テンプレート文字列

const name = "jyake";
const age = 28;
const message1 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message1);

// アロー関数
