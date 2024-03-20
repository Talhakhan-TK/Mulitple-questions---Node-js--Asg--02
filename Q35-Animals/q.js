console.log(" \n\nAnswer:");
var animals = ['Dog', 'Cat', 'Goat'];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("Statement about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    if (animal === 'Dog') {
        console.log('A dog would make a great pet.');
    }
    else if (animal === "Cat") {
        console.log("Many cats have addorable eyes.");
    }
    else {
        console.log("A goat is a friendly farm animal.");
    }
}
console.log('\nAny of these animals would make a great pet!');
