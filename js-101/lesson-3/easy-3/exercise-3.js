let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/*
The above code will output "hello there" because the variable str1 that was declared
and initialized to the primitive value of "hello there" on line 1 has not been
reassigned to a different value after line 1. Since str1 holds a primitive value and 
thus it's immutable, the intitialization of the variable str2 to the value of str1
creates a copy of the value of str1 so whatever happens to str2 doesn't affect str1.
*/