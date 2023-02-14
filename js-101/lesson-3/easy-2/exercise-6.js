// ----------- SOLUTION USING forEach ----------------
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
console.log(flintstones);

let newArray = [];

flintstones.forEach(stone => {
  if (Array.isArray(stone)) {
    stone.forEach(stone => newArray.push(stone))
  } else newArray.push(stone);
});

console.log(newArray);
