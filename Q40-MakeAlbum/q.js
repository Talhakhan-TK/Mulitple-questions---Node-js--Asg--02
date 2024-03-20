console.log(" \n\nAnswer:");
function make_album(Name, title, tracks) {
    var album = { Name: Name, title: title };
    if (tracks)
        album['tracks'] = tracks;
    return album;
}
var album1 = make_album("Taylor Swift:", "Folklore", 0);
var album2 = make_album("Drake:", "Scorpion", 0);
var album3 = make_album("Billie Eilish:", "Fall Asleep", 10);
console.log(album1);
console.log(album2);
console.log(album3);
