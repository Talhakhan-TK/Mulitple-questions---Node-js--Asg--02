console.log(" \n\nAnswer:")

function make_album(Name, title, tracks) : object {
  let album = {Name, title}
  if (tracks) 
    album['tracks']= tracks; return album;}

let album1 = make_album("Taylor Swift:","Folklore",0)
let album2 = make_album("Drake:","Scorpion",0)
let album3 = make_album("Billie Eilish:","Fall Asleep",10)

console.log(album1)
console.log(album2)
console.log(album3)