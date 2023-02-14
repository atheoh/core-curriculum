let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
On line 2, the method slice creates a shallow copy of arr1 which means that arr2
now holds the value of an array that contains two pointers to the original two
objects that are contained in the array of arr1 and three copies of the primitive 
values 3, 4 and 5. Thus, the reassignment of the 'first' property of the object at
index 0 in the arr2 array will also happen to the object in the arr1 array since they 
are the same objects.  
*/