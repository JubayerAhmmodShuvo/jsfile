//solution for problem 2


function pandaCost(singara, somusa, jilapi) {
    if (singara < 0 || somusa < 0 || jilapi < 0) {
        console.log("Enter valid numbers");
    } else {
        const perSingaraPrice = 7;
        const perSomusaPrice = 10;
        const perJilapiPrice = 15;
        var total = (singara * perSingaraPrice) + (somusa * perSomusaPrice) + (jilapi * perJilapiPrice);
        return total;
    }
}

var totalCost = pandaCost(10, 10, 10);
console.log(totalCost);