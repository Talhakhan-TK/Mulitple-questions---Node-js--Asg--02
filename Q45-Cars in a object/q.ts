// console.log(" \n\nAnswer:")
function Car(manufacturer, Model, ...options): object {
  let carInfo: any = {
    manufacturer: manufacturer,
    modelName: Model
  };

  options.forEach(option => {
    carInfo[option[0]] = option[1];
});

  return carInfo;}
let Carobject = Car("Chnagan", "oshan", ["color", "blue"], ["Capacity", "5 Seats"]);
  console.log(Carobject)
export{}
