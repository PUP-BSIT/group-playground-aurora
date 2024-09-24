enum TV_BRAND{
    SAMSUNG = "Samsung",
    SONY = "Sony",
    LG = "LG",
    TCL = "TLC",
    PANASONIC = "Panasonic",
}

type Item = {
    brand: string;
    color: string;
    screen_size: string;
    price: number;
    print(): void;
};

const Television: Item = {
    brand: "Samsung",
    color: "Silver",
    screen_size: "28",
    price: 35000,
    print: function (): void {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand.
        I want it to be ${this.color} color, since I like a cool and aesthetic look.
        I also want it to be ${this.screen_size} inches since I wanna see and experience the whole thing.
        My budget is around ${this.price}. `);
    },
};
