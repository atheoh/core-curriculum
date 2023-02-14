let advice = "Few things in life are as important as house training your pet dinosaur.";

let adviceArray = advice.split(' ').map(word => {
  if (word === 'important') {
    return 'urgent';
  } else return word;
})

let finalString = adviceArray.join(' ');
console.log(finalString);

// advice.replace('important', 'urgent');
