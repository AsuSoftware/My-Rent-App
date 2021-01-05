export interface Payment {
    id: string;
    paymentType: paymentType;
    accountName: string;
    iban: string;
    cardNumber: string;
    expirationMonth: Date;
    expirationYear: Date;
    securityCode: string;
}
