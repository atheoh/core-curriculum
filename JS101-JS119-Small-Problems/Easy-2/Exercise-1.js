let greetings = (arr, obj) => {
  let str1 = arr.join(" ");
  let str2 = obj.title + " " + obj.occupation;

  return `Hello, ${str1}! Nice to have a ${str2} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.