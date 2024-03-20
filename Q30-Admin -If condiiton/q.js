console.log(" \n\nAnswer:");
var Username = ["Talha", "Taveer", "Taha", "Admin", "Tania"];
for (var _i = 0, Username_1 = Username; _i < Username_1.length; _i++) {
    var User = Username_1[_i];
    if (User !== "Admin") {
        console.log("Hello", User, ", thank you for logging in again.");
    }
    else {
        console.log("Hello", User, ", would you like to see a status report");
    }
}
