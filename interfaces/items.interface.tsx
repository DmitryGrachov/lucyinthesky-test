export interface IItem {
    data: any;
    id?: number;
    model?: string;
    name?: string;
    image?: string;
    description?: string;
    sizes?: string[];
    price?: string;
    special?: string;
    priceInCents?: number;
    specialInCents?: number;
}

export interface IRootItems {
    data: IItem[];
    count: number;
    total: number;
    pageCount: number;
    page: number;
}

export interface IOneItem {
    name: string | undefined;
    image: string | undefined;
}
