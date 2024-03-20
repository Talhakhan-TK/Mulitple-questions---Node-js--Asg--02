console.log(" \n\nAnswer:");
function modify_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("shirt size:", (size), ", Message:", (message));
}
modify_shirt();
modify_shirt("Medium");
modify_shirt("Any size", "Do you love Javascipt?");
//arge Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
