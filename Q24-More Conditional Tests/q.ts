console.log("\n\nAnswer")
let autos: string = "SazGar"

console.log("A. equality and inequality with strings:")
console.log("Is auto == Sazgar? I predict True.");
console.log(autos[0] == "Sazgar");
console.log("Is auto != Honda? I predict True.");
console.log(autos[0] != "Honda");

console.log("B. Tests using the lower case function:")
console.log(autos.toLowerCase())

console.log("C. Numerical tests:")
let num3: number =6
console.log("Is num == 2:", num3 == 2)
console.log("Is p < 2:", num3 < 2)
console.log("Is num != 5:", num3 != 5)
console.log("Is num > 6:", num3 > 6)
console.log("Is num == 0:", num3 == 0)

console.log("D. Tests using & and OR operators:");
console.log("& Operator:",(num3>5)&&(num3<3))
console.log("OR Operator:",(num3>5)||(num3<3))

let auto: string[] = ["Sazgar","Honda"]
console.log("E. Test whether an item is in a array:")
console.log(auto[1])


console.log("F. Test whether an item is not in a array:");
console.log(auto[3])

