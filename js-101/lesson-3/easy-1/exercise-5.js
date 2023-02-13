console.log(false == '0');
/*
Line 1 will output true. When the loose quality operator is used, JavaScript
coerces the operands to the same type. In this case, it first coerces '0' into
the number 0 and then into the boolean value false and thus it returns true.
*/
console.log(false === '0');
/*
Line 8 will output false. When the strict equality operator is used, JavaScript
first checks if the two operands are of the same type. In this case, the two
operands are of different types and thus it returns false.
*/