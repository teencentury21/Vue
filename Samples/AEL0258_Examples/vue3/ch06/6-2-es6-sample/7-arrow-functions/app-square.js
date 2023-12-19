// ES5 Function
var squareES5 = function(a) {
    return a * a;
}
var resultES5 = squareES5(2);
console.log(`squareES5 執行結果: ${resultES5}`);

// ES6 Arrow Function
const squareES6 = a => a * a;
var resultES6 = squareES6(2);
console.log(`squareES6 執行結果: ${resultES6}`);