console.log(" \n\nAnswer:")
function show_magician(magicians) {
    for (let magic of magicians)
        console.log(magic)}

function makeGreat(magicians): string[] {
    let modifiedMagicians: string[] = [];
 for(let magic of magicians) {
        modifiedMagicians.push("the Great " + magic);
    }
 return modifiedMagicians;
}
export{}

let magicians: string[] = ["junaid Bangali","Baba Racnhordas","Harry Houdini"];
let modifiedMagicians = makeGreat(magicians);

console.log("Original Magicians:");
show_magician(magicians);

console.log("\nModified Magicians:");
show_magician(modifiedMagicians);
