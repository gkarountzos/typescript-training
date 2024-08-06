// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { // assigns labels to number
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person /*: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple , fixed length array
}*/ = {
  name: "George",
  age: 23,
  hobbies: ["Gym", "Coding"],
  role: Role.ADMIN,
};

// console.log(person.name);

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map);  //!ERROR!
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
