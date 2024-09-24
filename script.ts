enum Brand{
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
    screen_size: string;
    price: number;
    print(): void;
};


const tablet: Item = {
    brand: "Samsung",
    color: "Silver",
    quantity: 2,
    price: 35000,
    print() {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand.
        I want it to be ${this.color} color, since I like a cool and aesthetic look.
        I want ${this.quantity} of this item . My budget is around ${this.price}. `);
    },
};

const cellphone: Item = {
    brand: "Sony",
    color: "Black",
    quantity: 5,
    price: 40000,
    print() {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand.
        I want it to be ${this.color} color, since I like a cool and aesthetic look.
        I want ${this.quantity} of this item . My budget is around ${this.price}. `);
    },
};

const laptop: Item = {
    brand: "LG",
    color: "Grey",
    quantity: 7,
    price: 40000,
    print() {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand.
        I want it to be ${this.color} color, since I like a cool and aesthetic look.
        I want ${this.quantity} of this item . My budget is around ${this.price}. `);
    },

};

const television: Item = {
    brand: "TCL",
    color: "Black",
    quantity: 4,
    price: 40000,
    print() {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand.
        I want it to be ${this.color} color, since I like a cool and aesthetic look.
        I want ${this.quantity} of this item . My budget is around ${this.price}. `);
    },
        
};

const fan: Item = {
    brand: "Panasonic",
    color: "White",
    quantity: 6,
    price: 40000,
    print() {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand.
        I want it to be ${this.color} color, since I like a cool and aesthetic look.
        I want ${this.quantity} of this item . My budget is around ${this.price}. `);
    },
};

tablet.print();
cellphone.print();
laptop.print();
television.print();
fan.print();

