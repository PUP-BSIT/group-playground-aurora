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

