var numOneInput = document.getElementById("num1");
var numTwoInput = document.getElementById("num2");
var buttonEl = document.querySelector("button");
function add(a, b) {
    return a + b;
}
function printResult(result) {
    console.log(result);
}
// const result = add(5, 3);
// let isDone = false;
// console.log(result);
buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.addEventListener("click", function () {
    var num1 = +numOneInput.value;
    var num2 = +numTwoInput.value;
    var result = add(num1, num2);
    printResult(result);
});
