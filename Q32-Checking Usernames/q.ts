console.log(" \nAnswer:")

let  current_users = ["Talha", "Taveer", "Taha", "Admin", "Tania"];
let  New_users = ["Talha", "Zeenat", "Taha", "Zahra", "Zoya"];

New_users.forEach((newUsername) => {
    let isUsernameTaken= current_users.includes(newUsername);

    if (isUsernameTaken) {
        console.log(`The username '${newUsername}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUsername}' is available.`);
    }
});