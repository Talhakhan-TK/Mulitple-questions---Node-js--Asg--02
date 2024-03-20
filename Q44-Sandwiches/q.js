console.log(" \n\nAnswer:");
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich:");
    items.forEach(function (item) {
        console.log(item);
    });
}
makeSandwich("Bread", "Pickles", "Tomato", "Mayonnaise");
makeSandwich("Bread", "Chicken", "Pickles");
makeSandwich("Bread", "Peanut Butter", "Red onion");
