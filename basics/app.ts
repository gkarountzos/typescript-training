// class User {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const user = new User("Max", 30);
// console.log(user.name);
interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}
class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}

  print() {
    console.log(this.name);
  }
}

class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const user = new User("Max", 30);
console.log(user.name);

const numOneInput = document.getElementById("num1") as HTMLInputElement;
const numTwoInput = document.getElementById("num2") as HTMLInputElement;
const buttonEl = document.querySelector("button");

function add(a: number, b: number) {
  return a + b;
}

type PrintMode = "console" | "alert";

enum OutputMode {
  CONSOLE,
  ALERT,
}

function printResult(result: string | number, printMode: OutputMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode === OutputMode.ALERT) {
    alert(result);
  }
}

// const result = add(5, 3);
// let isDone = false;

// console.log(result);

interface CalculationContainer {
  res: number;
  print(): void;
}

type CalculationResults = CalculationContainer[]; //custom type - alias

let results: CalculationResults = [];
const names = ["George"];

buttonEl?.addEventListener("click", () => {
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
