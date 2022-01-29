var mobile = {
        color: "black",
        name: "iphone",
        price: "1000usd",
        storage: "16gb"
    }
    //1
    //console.log(mobile.color);
    //console.log(mobile);
    //2
mobile['color'] = "bl ";
//3
var colorProperty = 'color';
mobile[colorProperty] = "red";
console.log(mobile);