console.log(" \n\nAnswer:")
var  Username: string[] = ["Talha", "Taveer", "Taha", "Admin", "Tania"]
for (let User of Username)

if(User !== "Admin"){
  console.log("Hello", User, ", thank you for logging in again.")
}else {
  console.log("Hello", User, ", would you like to see a status report")
}
