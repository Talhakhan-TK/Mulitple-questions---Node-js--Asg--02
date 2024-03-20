console.log(" \n\nAnswer:");
function city_country(City, country) {
    console.log(City[0].toUpperCase() + City.slice(1), country[0].toUpperCase() + country.slice(1));
}
city_country("lahore,", "Pakistan");
city_country("Tokyo,", "japan");
city_country("Macca,", "KSA");
