//solution of problem 3

function picnicBudget(people) {
    if (people < 0) {
        console.log("Enter a valid number");
    } else {
        var firstPerPersonPrice = 5000;
        var secondPerPersonPrice = 4000;
        var thirdPerPersonPrice = 3000;
        if (people <= 100) {
            const firstHunderedCost = people * firstPerPersonPrice;
            return firstHunderedCost;
        } else if (people <= 200) {
            const firstHunderedCost = 100 * firstPerPersonPrice;
            const restPeople = people - 100;
            const restPeopleCost = restPeople * secondPerPersonPrice;
            const totalCost = firstHunderedCost + restPeopleCost;
            return totalCost;
        } else {
            const firstHunderedCost = 100 * firstPerPersonPrice;
            const secondHunderedCost = 100 * secondPerPersonPrice;
            const restPeople = people - 200;
            const restPeopleCost = restPeople * thirdPerPersonPrice;
            const totalCost = firstHunderedCost + secondHunderedCost + restPeopleCost;
            return totalCost;

        }


    }
}

var totalCost = picnicBudget(201);
console.log(totalCost);