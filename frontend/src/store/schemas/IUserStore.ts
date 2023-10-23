import { ILocationStore } from "./ILocationStore";

export interface IUserStore {
    id: number;
    username: string;
    email: string;
    phoneNumber: string;
    isLoggedIn: boolean;
    birthday?: Date;
    rewardsPoints?: number;
    savedPaymentMethods?: IPaymentMethod[];
    preferredPaymentMethod?: IPaymentMethod;
    savedAddresses?: ILocationStore[];
    reviews?: IReview[];
}

interface IPaymentMethod {
    cardNumber: string;
    cvv: string;
    expirationDate: string;
}

interface IReview {
    id: number;
    iceCreamId: number;
    userId: number;
    rating: number;
    comment?: string;
}
