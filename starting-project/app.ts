// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "Giorgos";
// if (typeof userInput === "string") {
//   userName = userInput;
// }

// function generateError(message: string, code: number): never {
//   //function type is never
//   throw { message: message, errorCode: code };
//   //   while (true) {}
// }

// const result = generateError("An error occurred!", 500);

// console.log(result);

// Create the type for the array of objects below

interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  sex: string;
}

const users: User[] = [
  {
    id: 13443,
    name: "John",
    surname: "Volter",
    age: 3,
    sex: "M",
  },
  {
    id: 25466,
    name: "Mary",
    surname: "Wild",
    age: 18,
    sex: "F",
  },
  {
    id: 21121,
    name: "John",
    surname: "Porter",
    age: 28,
    sex: "M",
  },
];

export const getUsersById = (id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

export const getUsersByName = (name: string): User[] => {
  return users.filter((user) => user.name === name);
};

export const getMalesFullName = (): { id: number; fullName: string }[] => {
  return users
    .filter((user) => user.sex === "M")
    .map((user) => ({
      id: user.id,
      fullName: `${user.name} ${user.surname}`,
    }));
};

export const getAdultsObject = (): Record<
  number,
  { name: string; surname: string; age: number }
> => {
  return users
    .filter((user) => user.age >= 18)
    .reduce((acc, curr) => {
      acc[curr.id] = { name: curr.name, surname: curr.surname, age: curr.age };
      return acc;
    }, {}) as Record<number, { name: string; surname: string; age: number }>;
};
