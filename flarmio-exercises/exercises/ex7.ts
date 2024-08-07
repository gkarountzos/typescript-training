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
  // return a user by his/her id
  return users.find((user) => user.id === id);
};

export const getUsersByName = (name: string): User[] => {
  // return all users given a specific name
  return users.filter((user) => user.name === name);
};

export const getMalesFullName = (): { id: number; fullName: string }[] => {
  /* return an object  that contains the users' fullname whose sex is 'M'
    expected output:
    [ {id: 13443, fullName: "John Volter"},
      {id: 21121, fullName: "John Porter"}
    ]
    */
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
  /* return an object with keys the ids and values the name, surname and age
    for the users whose age is greater or equal to 18
    expected output:
     {
        21121: {name: "John", surname: "Porter", age: 28},
        25466: {name: "Mary", surname: "Wild", age: 18},
     }
    */
  return users
    .filter((user) => user.age >= 18)
    .reduce((acc, curr) => {
      acc[curr.id] = { name: curr.name, surname: curr.surname, age: curr.age };
      return acc;
    }, {}) as Record<number, { name: string; surname: string; age: number }>;
};
