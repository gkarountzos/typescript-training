// Create a function that takes an array of fruits as input (['apple', 'banana', 'orange', 'apple']) and a
// fruit as second parameter. The function should return the number of times the fruit is in the array.
// Example: exercise2('apple', ['apple', 'banana', 'orange', 'apple']) => 2

export const exercise2 = (fruit: string, basket: string[]): number => {
  let count = 0;
  for (const item of basket) {
    if (item === fruit) {
      count++;
    }
  }
  return count;
};
