console.log(" \nAnswer:")
let Ordinal_Number: Number[] =[1,2,3,4,5,6,7,8,9]
for (let Num of Ordinal_Number)
if (Num === 1) {
    console.log(Num,"st")
} else if (Num === 2) {
    console.log(Num,"nd")
}
   else if (Num === 3) {
        console.log(Num,"rd")
   }
  else {
    console.log(Num,"th")
  }