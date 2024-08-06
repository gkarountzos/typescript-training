// Create a PersonType with the following properties (name, age(optional), position, salary(optional)) and
// a function that takes a salary and a person object as arguments and returns a new person object with the
// same properties as the person argument but with the salary property set to the salary argument.
// Example: exercise6(1000, {name: 'Tasos', age: 24, position: 'developer'}) =>
// {name: 'Tasos', age: 24, position: 'developer', salary: 1000}

type PersonType = {
  name: string;
  age?: number;
  position: string;
  salary?: number;
};

export const exercise6 = (salary: number, person: PersonType): PersonType => {
  return { ...person, salary: salary };
};
