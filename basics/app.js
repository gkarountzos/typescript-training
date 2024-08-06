"use strict";
// class User {
//   name: string;
//   private age: number;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name);
    }
}
class Admin extends User {
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
const user = new User("Max", 30);
console.log(user.name);
const numOneInput = document.getElementById("num1");
const numTwoInput = document.getElementById("num2");
const buttonEl = document.querySelector("button");
function add(a, b) {
    return a + b;
}
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
function printResult(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
let results = [];
const names = ["George"];
buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.addEventListener("click", () => {
    const num1 = +numOneInput.value;
    const num2 = +numTwoInput.value;
    const result = add(num1, num2);
    const resultContainer = {
        res: result,
        print() {
            console.log(this.res);
        },
    };
    results.push(resultContainer);
    // results[0].print;
    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
});
function logAndEcho(val) {
    console.log(val);
    return val;
}
logAndEcho("Hi there").split(" ");
