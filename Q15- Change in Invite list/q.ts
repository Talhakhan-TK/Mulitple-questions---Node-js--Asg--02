console.log("Changing Guest List: You just heard that one of your guests cant make the dinner, so you need to send out a new set of invitations. You'll have to think of someone else to invite. \n\nAnswer")
let guestlist2: string[] =["Tahir","Tariq","Tanveer"];
console.log("Pervious List:\n" + guestlist2)
guestlist2.pop();
guestlist2.push("Tania")
console.log("New list:\n" + guestlist2)
for(let invite of guestlist2)
console.log("Hi " + invite + ", Please join me tonight for dinner")