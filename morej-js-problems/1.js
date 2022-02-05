//solution of problem 1

function anaToVori(ana) {
    if (ana < 0) {
        console.log("Enter a valid number");
    } else {
        const vori = ana * 0.0625;
        return vori;
    }
}
var totalVori = anaToVori(48);
console.log(totalVori);