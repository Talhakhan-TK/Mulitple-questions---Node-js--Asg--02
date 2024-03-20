console.log(" \n\nAnswer:");
var magic = ["junaid Bangali", "Baba Racnhordas", "Harry Houdini"];
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magic_1 = magicians_1[_i];
        console.log(magic_1);
    }
}
function makeGreat(magicians) {
    var index = 0;
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magic_2 = magicians_2[_i];
        magicians[index] = "The Great " + magic_2;
        index++;
    }
}
makeGreat(magic);
show_magician(magic);
