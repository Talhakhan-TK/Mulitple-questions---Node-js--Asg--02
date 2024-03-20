console.log("More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.• Add one new guest to the beginning of your array.• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. \n\nAnswer:-");
var q15list = ["Tahir", "Tariq", "Tania"];
console.log("Q15 List:\n" + q15list);
q15list.push("Tanveer");
q15list.unshift("Touqeer");
q15list.splice(3, 0, "Talbiya");
console.log("New list:\n" + q15list + "\n");
for (var _i = 0, q15list_1 = q15list; _i < q15list_1.length; _i++) {
    var invite = q15list_1[_i];
    console.log("Hi " + invite + ", Bigger table found; Sab ajao!");
}
