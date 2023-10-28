import { IProductStore } from "./IProductStore";

export interface IWishlistStore {
    id: number;
    items: IWishlistItem[];
}

interface IWishlistItem {
    id: number;
    product: IProductStore;
}
