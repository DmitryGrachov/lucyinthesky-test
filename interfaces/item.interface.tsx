export interface ISingleRequestItem {
    id: number;
    model: string;
    name: string;
    image: string;
    description: string;
    sizes: string[];
    price: string;
    special: string;
    priceInCents: number;
    specialInCents: number;
}

export interface ISingleItem {
    image: string;
    name: string;
    description: string;
    sizes: string[];
    id: number;
    priceInCents: number;
    price: string;
}

export interface IItemForCart {
    id: number;
    name: string;
    image: string;
    price: string;
    priceInCents: number;
    size: string;
    quantity: number;
}
