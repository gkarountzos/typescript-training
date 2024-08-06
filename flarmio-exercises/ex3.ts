// The following function takes a color that can only be 'red', 'yelow' or 'green' and returns the fruits
// that are of that color. Replace the unknown types with the correct types.
// Example: exercise3('red') => ['apple', 'strawberry', 'cherry', 'tomato']

export const exercise3 = (color: "red" | "yellow" | "green"): string[] => {
  let result: string[] = [];

  if (color === "red") {
    result = ["apple", "strawberry", "cherry", "tomato"];
  } else if (color === "yellow") {
    result = ["banana", "pineapple"];
  } else if (color === "green") {
    result = ["watermelon", "apple", "pear", "lime"];
  }

  return result;
};
