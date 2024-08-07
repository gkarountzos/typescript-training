// Create a function that takes a key as an argument and returns an array with the values of every object in
// the people array. Also create the array type.
// Example: exercise5('age') => [24, 22, 25]

//! USING TYPE
// type Person = [
//   {
//     name: string;
//     age: number;
//     gender: string;
//     position: string;
//   },
//   {
//     name: string;
//     lastName: string;
//     age: number;
//     position: string;
//   },
//   {
//     name: string;
//     age: number;
//     gender: string;
//     position: string;
//   }
// ];

//! USING INTERFACE
interface Person {
  name: string;
  lastName?: string;
  age: number;
  gender?: string;
  position: string;
}

const people: Person[] = [
  {
    name: "Tasos",
    age: 24,
    gender: "male",
    position: "developer",
  },
  {
    name: "Stefanos",
    lastName: "Michelakis",
    age: 22,
    position: "developer",
  },
  {
    name: "Andriana",
    age: 25,
    gender: "female",
    position: "buisness",
  },
];

export const exercise5 = (key: string): any[] => {
  return people.map((person) => person[key]);
};
