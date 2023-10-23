import { ILocationStore } from "./ILocationStore";

export interface IUserStore {
    id: number;
    username: string;
    email: string;
    phoneNumber: string;
    birthday: Date;
    rewardsPoints: number;
    savedPaymentMethods: IPaymentMethod[];
    preferredPaymentMethod: IPaymentMethod;
    isLoggedIn: boolean;
    token: string;
    savedAddresses: ILocationStore[];
    reviews: IReview[];
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
    comment: string;
}
