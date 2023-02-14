// Solution 1:
let isColorValid1 = color => (color === "blue" || color === "green");

console.log(isColorValid1("blue"));
console.log(isColorValid1("green"));
console.log(isColorValid1("black"));

// Solution 2:
let isColorValid2 = color => ["blue", "green"].includes(color);

console.log(isColorValid2("blue"));
console.log(isColorValid2("green"));
console.log(isColorValid2("black"));