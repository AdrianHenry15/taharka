import { observable } from "mobx";
import { IUserStore } from "./schemas/IUserStore";
import { ICartStore } from "./schemas/ICartStore";
import { IProductStore } from "./schemas/IProductStore";
import { IModalStore } from "./schemas/IModalStore";
import { IActiveStore } from "./schemas/IActiveStore";
import { ICategoryStore } from "./schemas/ICategoryStore";
import { IStoreModalStore } from "./schemas/IStoreModalStore";

export class GlobalStateStore {
    constructor(base?: Partial<GlobalStateStore>) {
        Object.assign(this, base);
    }

    // @observable ModalOpen: boolean = false;

    @observable CurrentPage: string = "";

    @observable BaseUrl: string = "";

    @observable Modal: IModalStore = {
        isOpen: false,
        onOpen: () => {
            this.Modal.isOpen = true;
        },
        onClose: () => {
            this.Modal.isOpen = false;
        },
    };

    @observable CategoryStore: ICategoryStore = {
        isOpen: false,
        isEdit: false,
        editId: undefined,
        onOpen: () => (this.CategoryStore.isOpen = true),
        onEdit: (id: string) => {
            this.CategoryStore.isOpen = true;
            this.CategoryStore.isEdit = true;
            this.CategoryStore.editId = id;
        },
        onClose: () => {
            this.CategoryStore.isOpen = false;
            this.CategoryStore.isEdit = false;
            this.CategoryStore.editId = undefined;
        },
    };

    @observable ActiveStore: IActiveStore = {
        id: undefined,
        set: (id: string) => (this.ActiveStore.id = id),
        reset: () => (this.ActiveStore.id = undefined),
    };

    @observable User: IUserStore = {
        id: 0,
        username: "",
        email: "",
        phoneNumber: "",
        rewardsPoints: 0,
        preferredPaymentMethod: {
            cardNumber: "",
            cvv: "",
            expirationDate: "",
        },
        savedPaymentMethods: [],
        isLoggedIn: false,
        birthday: new Date(),
        savedAddresses: [],
        reviews: [],
    };

    @observable StoreModal: IStoreModalStore = {
        isOpen: false,
        onOpen: () => (this.StoreModal.isOpen = true),
        onClose: () => (this.StoreModal.isOpen = false),
    };

    @observable Product: IProductStore = {
        isOpen: false,
        isEdit: false,
        editId: undefined,
        onOpen: () => (this.CategoryStore.isOpen = true),
        onEdit: (id: string) => {
            this.CategoryStore.isOpen = true;
            this.CategoryStore.isEdit = true;
            this.CategoryStore.editId = id;
        },
        onClose: () => {
            this.CategoryStore.isOpen = false;
            this.CategoryStore.isEdit = false;
            this.CategoryStore.editId = undefined;
        },
    };

    @observable Cart: ICartStore = {
        items: [],
        totalItems: 0,
        totalCost: 0,
    };
}

export const globalStore = new GlobalStateStore();
