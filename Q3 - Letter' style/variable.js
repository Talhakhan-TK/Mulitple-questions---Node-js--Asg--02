var hisname = "Talha khaN";
console.log("deafult:".concat(hisname, "\n"));
console.log("lowercase:".concat(hisname.toLowerCase(), "\n"));
console.log("uppercase:".concat(hisname.toUpperCase()));
hisname = hisname.toLowerCase().replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log(("Title case:" + hisname));
