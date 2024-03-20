console.log(" \n\nAnswer:")
let  animal1: string[] = ['Dog', 'Cat', 'Goat'];
for (let animal of animal1)
console.log(animal)
console.log("Statement about each animal:")
for (let animal of animal1)
if (animal === 'Dog'){
  console.log('A dog would make a great pet.')
}else if (animal === "Cat"){
  console.log("Many cats have addorable eyes.")
} else {
  console.log("A goat is a friendly farm animal.")
}

console.log('\nAny of these animals would make a great pet!');
