console.log("Shrinking Guest List: You just found out that your new dinner table wont arrive in time for the dinner, and you have space for only two guests.• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know youre sorry you cant invite them to dinner.• Print a message to each of the two people still on your list, letting them know theyre still invited.• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.\n\nAnswer:-")
let q16list = ["Touqeer","Tahir","Tariq","Talbiya","Tania","Tanveer"]
console.log("Pervious List:\n" + q16list + "\n(Now only first 2 from this list will be my final guest)\n")
console.log("Hi "+ q16list.pop() + ", Sorry i am unable to invite you due to space issue.")
console.log("Hi "+ q16list.pop() + ", Sorry i am unable to invite you due to space issue.")
console.log("Hi "+ q16list.pop() + ", Sorry i am unable to invite you due to space issue.")
console.log("Hi "+ q16list.pop() + ", Sorry i am unable to invite you due to space issue.\n")

//,Sorry i am unable to invite you due to space issue"
console.log("final List:")
for(let Message of q16list)
console.log("Hi " + Message + ", You are still Invited, Happy?" )
"\n"
console.log("Empty List:")
q16list.pop()
q16list.pop()