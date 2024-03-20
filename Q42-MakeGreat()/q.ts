console.log(" \n\nAnswer:")
let magic: string[] = ["junaid Bangali","Baba Racnhordas","Harry Houdini"];
function show_magician(magicians) {
    for (let magic of magicians)
        console.log(magic)}

function makeGreat(magicians): void {
   let index = 0;
    for (let magic of magicians) {
       magicians[index] = "The Great " + magic;
        index++;
}
}

makeGreat(magic);
show_magician(magic);
