// Create a function that takes the name of a fruit as an argument and returns the price of that fruit
// from the `prices` object.

const prices = {
  apple: 0.25,
  banana: 0.3,
  cherry: 0.4,
  lime: 0.15,
};

export const exercise4 = (
  fruit: "apple" | "banana" | "cherry" | "lime"
): number => {
  //   let result: number = 0;
  //   if (fruit === "apple") {
  //     result = prices.apple;
  //   } else if (fruit === "banana") {
  //     result = prices.banana;
  //   } else if (fruit === "cherry") {
  //     result = prices.cherry;
  //   } else if (fruit === "lime") {
  //     result = prices.lime;
  //   }

  return prices[fruit];
};
