import { Address } from "./address";
import { Payment } from "./payment";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: Address;
    paymentInfo: Payment;
}
