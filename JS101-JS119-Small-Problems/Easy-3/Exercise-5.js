let triangle = n => {
  let counter1 = n;
  let counter2 = counter1 - 1;

  while(n) {
    console.log(`${" ".repeat(n - 1)}${"*".repeat(counter1 - counter2)}`);
    n--;
    counter2--;
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********