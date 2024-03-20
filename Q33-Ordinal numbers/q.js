console.log(" \nAnswer:");
var Ordinal_Number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, Ordinal_Number_1 = Ordinal_Number; _i < Ordinal_Number_1.length; _i++) {
    var Num = Ordinal_Number_1[_i];
    if (Num === 1) {
        console.log(Num, "st");
    }
    else if (Num === 2) {
        console.log(Num, "nd");
    }
    else if (Num === 3) {
        console.log(Num, "rd");
    }
    else {
        console.log(Num, "th");
    }
}
//console.log(Number)
