function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
var inches = 132;
var feet = inchToFeet(inches)
console.log(feet);

var dadiInches = 144;
var feet = dadiInches / 12;
console.log(feet);


function mileToKilometers(miles) {
    var kilometers = miles * 1.60934;
    return kilometers;
}
var marathonMiles = mileToKilometers(26.2);
console.log(marathonMiles);