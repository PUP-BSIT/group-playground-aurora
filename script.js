var TV_BRAND;
(function (TV_BRAND) {
    TV_BRAND["SAMSUNG"] = "Samsung";
    TV_BRAND["SONY"] = "Sony";
    TV_BRAND["LG"] = "LG";
    TV_BRAND["TCL"] = "TLC";
    TV_BRAND["PANASONIC"] = "Panasonic";
})(TV_BRAND || (TV_BRAND = {}));
var Television = {
    brand: "Samsung",
    color: "Silver",
    screen_size: "28",
    price: 35000,
    print: function () {
        console.log("I wanna buy a ".concat(this.brand, ", since it is\n        a know local brand.\n        I want it to be ").concat(this.color, " color, since I like a cool and aesthetic look.\n        I also want it to be ").concat(this.screen_size, " inches since I wanna see and experience the whole thing.\n        My budget is around ").concat(this.price, ". "));
    },
};
var Television = {
    brand: "Sony",
    color: "Black",
    screen_size: "68",
    price: 40000,
    print: function () {
        console.log("I wanna buy a ".concat(this.brand, ", since it is\n        a know local brand.\n        I want it to be ").concat(this.color, " color, since I like a cool and aesthetic look.\n        I also want it to be ").concat(this.screen_size, " inches since I wanna see and experience the whole thing.\n        My budget is around ").concat(this.price, ". "));
    },
};
