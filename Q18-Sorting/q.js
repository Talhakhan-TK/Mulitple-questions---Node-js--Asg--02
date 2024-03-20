var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Q18 - Seeing th world\n\nAnswer");
var place = ["KSA", "UAE", "Canada", "USA", "Germany"];
console.log(place);
console.log("Alphabetical order:", __spreadArray([], place, true).sort());
console.log("Original Order:", place);
console.log("Reversal Order:", __spreadArray([], place, true).sort().reverse());
console.log("Original Order:", place);
console.log("Reversed order:", (place).reverse());
console.log("Original order:", (place).reverse());
console.log("Sorted order:", (place).sort());
console.log("Reversal sorted order:", (place).sort().reverse());
