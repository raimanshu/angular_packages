export interface IPaymentCard {
    id?: number;
    cardType: string;
    cardNumber: string;
    cardholderName: string;
    cvc: string;
    expirationDate: string;
    cardMonth?: number;
    cardYear?: number;
    userId: number;
    customerId: string;
    token?: string;
}

export interface IStripeCustomResponse {
    status: boolean | string;
    message: string;
    completeError?: any;
    error?: any;
    token?: string;
    response: any;
}