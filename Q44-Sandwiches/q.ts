console.log(" \n\nAnswer:")

function makeSandwich(...items): void {
  console.log("\nMaking a sandwich:");
 items.forEach(item => {
      console.log(item);
  });
}
makeSandwich("Bread", "Pickles", "Tomato", "Mayonnaise");
makeSandwich("Bread", "Chicken", "Pickles");
makeSandwich("Bread", "Peanut Butter", "Red onion");
