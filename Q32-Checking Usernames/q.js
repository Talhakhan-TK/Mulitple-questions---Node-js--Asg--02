console.log(" \nAnswer:");
var current_users = ["Talha", "Taveer", "Taha", "Admin", "Tania"];
var New_users = ["Talha", "Zeenat", "Taha", "Zahra", "Zoya"];
New_users.forEach(function (newUsername) {
    var isUsernameTaken = current_users.includes(newUsername);
    if (isUsernameTaken) {
        console.log("The username '".concat(newUsername, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(newUsername, "' is available."));
    }
});
