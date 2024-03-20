"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(" \n\nAnswer:")
function Car(manufacturer, Model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: Model
    };
    options.forEach(function (option) {
        carInfo[option[0]] = option[1];
    });
    return carInfo;
}
var Carobject = Car("Chnagan", "oshan");
console.log(Carobject);
