var Brand;
(function (Brand) {
    Brand["SAMSUNG"] = "Samsung";
    Brand["SONY"] = "Sony";
    Brand["LG"] = "LG";
    Brand["TCL"] = "TLC";
    Brand["PANASONIC"] = "Panasonic";
})(Brand || (Brand = {}));
var Tablet = {
    brand: "Samsung",
    color: "Silver",
    quantity: 2,
    price: 35000,
    print: function () {
        console.log("I wanna buy a ".concat(this.brand, ", since it is\n        a know local brand.\n        I want it to be ").concat(this.color, " color, since I like a cool and aesthetic look.\n        I want ").concat(this.quantity, " of this item . My budget is around ").concat(this.price, ". "));
    },
};
var Cellphone = {
    brand: "Sony",
    color: "Black",
    quantity: 5,
    price: 40000,
    print: function () {
        console.log("I wanna buy a ".concat(this.brand, ", since it is\n        a know local brand.\n        I want it to be ").concat(this.color, " color, since I like a cool and aesthetic look.\n        I want ").concat(this.quantity, " of this item . My budget is around ").concat(this.price, ". "));
    },
};
var Laptop = {
    brand: "LG",
    color: "Grey",
    quantity: 7,
    price: 40000,
    print: function () {
        console.log("I wanna buy a ".concat(this.brand, ", since it is\n        a know local brand.\n        I want it to be ").concat(this.color, " color, since I like a cool and aesthetic look.\n        I want ").concat(this.quantity, " of this item . My budget is around ").concat(this.price, ". "));
    },
};
var Television = {
    brand: "TCL",
    color: "Black",
    quantity: 4,
    price: 40000,
    print: function () {
        console.log("I wanna buy a ".concat(this.brand, ", since it is\n        a know local brand.\n        I want it to be ").concat(this.color, " color, since I like a cool and aesthetic look.\n        I want ").concat(this.quantity, " of this item . My budget is around ").concat(this.price, ". "));
    },
};
var Fan = {
    brand: "Panasonic",
    color: "White",
    quantity: 6,
    price: 40000,
    print: function () {
        console.log("I wanna buy a ".concat(this.brand, ", since it is\n        a know local brand.\n        I want it to be ").concat(this.color, " color, since I like a cool and aesthetic look.\n        I want ").concat(this.quantity, " of this item . My budget is around ").concat(this.price, ". "));
    },
};
Tablet.print();
Cellphone.print();
Laptop.print();
Television.print();
Fan.print();
