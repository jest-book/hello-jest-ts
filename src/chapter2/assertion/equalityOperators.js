/* eslint-disable */

// 二重等号を利用した比較では暗黙的な型変換が発生する
console.log('2' == 2) // true
console.log(true == 1) // true

// 三重等号を利用した比較では暗黙的な型変換は発生しない
// 型が異なるため、等しくないと評価される
console.log('2' === 2) // false
console.log(true === 1) // false

// Object.isはNaNと0を特別扱いしない
// ==
console.log(NaN == NaN) // false
console.log(+0 == -0) // true

// ===
console.log(NaN == NaN) // false
console.log(+0 == -0) // true

// Object.is
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(+0, -0)) // false
