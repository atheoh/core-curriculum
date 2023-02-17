// A

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // Outputs "one is: one"
// console.log(`two is: ${two}`); // Outputs "two is: two"
// console.log(`three is: ${three}`); // Outputs "three is: three"

/*
On line 13 the values of the variables one, two and three that were declared and
initialized on lines 9, 10 and 11 respectively are passed as arguments to the function
call by reference since they are arrays. At this point, both the variables one, two
and three from lines 9, 10 and 11 and the function parameters with the same names each
point to the same corresponding array.
Variable one and parameter one point to the same array ["one"],
Variable two and parameter two point to the same array ["two"],
Variable three and parameter three point to the same array [three].
In the function body each parameter is reassigned to point to a different array from
the three original arrays while the original three variables still point
to their original values. This is why we expect the above output results. 
*/

// B

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // Outputs "one: is one"
// console.log(`two is: ${two}`); // Outputs "two: is two"
// console.log(`three is: ${three}`); // Outputs "three: is three"

/*
On line 45 the values of the variables one, two and three that were declared and
initialized on lines 41, 42 and 43 respectively are passed as arguments to the
function call by reference since they are arrays. At this point, both the variables
one, two and three from lines 41, 42 and 43 and the function parameters with the same
names each point to the same corresponding array.
Variable one and parameter one point to the same array ["one"],
Variable two and parameter two point to the same array ["two"],
Variable three and parameter three point to the same array [three].
In the function body each parameter is reassgined to a new array, unlike in snippet A
where each parameter was reassigned to one of the original arrays but a different
one from their first assignment. When the function call ends the original
three variables still point to their original values so we expect the same output as
in snippet A.
*/

// C

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // Outputs "one is: two"
console.log(`two is: ${two}`); // Outputs "two is: three"
console.log(`three is: ${three}`); // Outputs "three is: one"

/*
On line 79 the values of the variables one, two and three that were declared and
initialized on lines 75, 76 and 77 respectively are passed as arguments to the
function call by reference since they are arrays. At this point, both the variables
one, two and three from lines 75, 76 and 77 and the function parameters with the same
names each point to the same corresponding array.
Variable one and parameter one point to the same array ["one"],
Variable two and parameter two point to the same array ["two"],
Variable three and parameter three point to the same array [three].
Inside the function body the value of each parameter is mutated using the splice
method. Since both the parameters and the original variables reference the same
coressponding array, each log function will output the mutated array.
*/