let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Giorgos";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  //function type is never
  throw { message: message, errorCode: code };
  //   while (true) {}
}

const result = generateError("An error occurred!", 500);

console.log(result);
