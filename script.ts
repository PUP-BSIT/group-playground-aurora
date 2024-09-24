enum BRAND{
    SAMSUNG = "Samsung",
    SONY = "Sony",
    LG = "LG",
    TCL = "TLC",
    PANASONIC = "Panasonic",
}

type Item = {
    brand: string;
    color: string;
    quantity: number;
    price: number;
    print(): void;
};

const Tablet: Item = {
    brand: "Samsung",
    color: "Silver",
    quantity: 2,
    price: 35000,
    print: function (): void {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand.
        I want it to be ${this.color} color, since I like a cool and aesthetic look.
        I want ${this.quantity} of this item . My budget is around ${this.price}. `);
    },
};

const Cellphone: Item = {
    brand: "Sony",
    color: "Black",
    quantity: 5,
    price: 40000,
    print: function (): void {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand.
        I want it to be ${this.color} color, since I like a cool and aesthetic look.
        I want ${this.quantity} of this item . My budget is around ${this.price}. `);
    },
};

const Laptop: Item = {
    brand: "LG",
    color: "Grey",
    quantity: 7,
    price: 40000,
    print: function (): void {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand.
        I want it to be ${this.color} color, since I like a cool and aesthetic look.
        I want ${this.quantity} of this item . My budget is around ${this.price}. `);
    },

};

const Television: Item = {
    brand: "TCL",
    color: "Black",
    quantity: 4,
    price: 40000,
    print: function (): void {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand.
        I want it to be ${this.color} color, since I like a cool and aesthetic look.
        I want ${this.quantity} of this item . My budget is around ${this.price}. `);
    },
        
};

const Fan: Item = {
    brand: "Panasonic",
    color: "White",
    quantity: 6,
    price: 40000,
    print: function (): void {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand.
        I want it to be ${this.color} color, since I like a cool and aesthetic look.
        I want ${this.quantity} of this item . My budget is around ${this.price}. `);
    },
};

Tablet.print();
Cellphone.print();
Laptop.print();
Television.print();
Fan.print();

