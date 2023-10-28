import { IProductStore } from "./IProductStore";

export interface ICartStore {
    items: CartItem[];
    totalItems: number;
    totalCost: number;
}

interface CartItem {
    id: number;
    product: IProductStore;
}
