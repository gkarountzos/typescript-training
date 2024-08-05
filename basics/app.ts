const numOneInput = document.getElementById("num1") as HTMLInputElement;
const numTwoInput = document.getElementById("num2") as HTMLInputElement;
const buttonEl = document.querySelector("button");

function add(a: number, b: number) {
  return a + b;
}

function printResult(result: number) {
  console.log(result);
}

// const result = add(5, 3);
// let isDone = false;

// console.log(result);

buttonEl?.addEventListener("click", () => {
  const num1 = +numOneInput.value;
  const num2 = +numTwoInput.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
  };
  printResult(result);
});
