console.log(" \n\nAnswer:");
function describe_city(City, country) {
    if (City === void 0) { City = ""; }
    if (country === void 0) { country = "is in Pakistan"; }
    console.log(City, country);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Madina", "is in KSA");
