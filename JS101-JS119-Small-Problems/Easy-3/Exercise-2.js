let logInBox = str => {
  let dash = '';
  let space = '';
  let idx = 0;

  while (idx < str.length) {
    dash += '-';
    idx++;
  }
  idx = 0;
  while (idx < str.length + 2) {
    space += ' ';
    idx++;
  }
  console.log(`+-${dash}-+`)
  console.log(`|${space}|`);
  console.log(`| ${str} |`);
  console.log(`|${space}|`);
  console.log(`+-${dash}-+`)
}

// logInBox('To boldly go where no one has gone before.');
// logInBox('');
// logInBox('Another example.');

// Further Exploration

let logInBoxV2 = (str, maxWidth) => {

  if(str.length + 4 > maxWidth) {
    let counter = str.length + 4 - maxWidth;

    while(counter) {
      str = str.slice(0, str.length - 1);
      counter--;
    } 
  }

  let dash = '';
  let space = '';
  let idx = 0;

  while (idx < str.length) {
    dash += '-';
    idx++;
  }
  idx = 0;
  while (idx < str.length + 2) {
    space += ' ';
    idx++;
  }
  console.log(`+-${dash}-+`)
  console.log(`|${space}|`);
  console.log(`| ${str} |`);
  console.log(`|${space}|`);
  console.log(`+-${dash}-+`)
}

console.log('To boldly go where no one has gone before.'.length)
logInBoxV2('To boldly go where no one has gone before.', 44);
logInBoxV2('');
console.log('Another example.'.length);
logInBoxV2('Another example.', 20);