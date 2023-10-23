import { observable } from "mobx";
import { IUserStore } from "./schemas/IUserStore";
import { ICartStore } from "./schemas/ICartStore";
import { IProductStore } from "./schemas/IProductStore";

export class GlobalStateStore {
    constructor(base?: Partial<GlobalStateStore>) {
        Object.assign(this, base);
    }

    @observable Modal: boolean = false;

    @observable CurrentPage: string = "";

    @observable User: IUserStore = {
        id: 0,
        username: "",
        email: "",
        rewardsPoints: 0,
        preferredPaymentMethod: {
            cardNumber: "",
            cvv: "",
            expirationDate: "",
        },
        savedPaymentMethods: [],
        isLoggedIn: false,
        token: "",
        phoneNumber: "",
        birthday: new Date(),
        savedAddresses: [],
        reviews: [],
    };

    @observable Product: IProductStore = {
        id: 0,
        name: "",
        description: "",
        price: 0,
        category: "",
        imageUrl: "",
    };

    @observable Cart: ICartStore = {
        items: [],
        totalItems: 0,
        totalCost: 0,
    };
}

export const globalStore = new GlobalStateStore();
