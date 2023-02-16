let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);
console.log(munsters);

/*
Yes, the object values within the munsters object will be mutated. This happens
because objects in JavaScript are passed by reference. In this case, the munsters
object is passed by reference to the messWithDemographics function call. Now both 
the function parameter demoObject and the munsters variable reference the same object
which means that whatever change happens to demoObject, also happens to munsters.
*/