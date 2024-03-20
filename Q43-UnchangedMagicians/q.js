"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(" \n\nAnswer:");
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magic = magicians_1[_i];
        console.log(magic);
    }
}
function makeGreat(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magic = magicians_2[_i];
        modifiedMagicians.push("the Great " + magic);
    }
    return modifiedMagicians;
}
var magicians = ["junaid Bangali", "Baba Racnhordas", "Harry Houdini"];
var modifiedMagicians = makeGreat(magicians);
console.log("Original Magicians:");
show_magician(magicians);
console.log("\nModified Magicians:");
show_magician(modifiedMagicians);
