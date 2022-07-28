import { BankAccount } from './bankAccount';
import { Card } from './card';
export declare class StoredDetails {
    'bank'?: BankAccount;
    'card'?: Card;
    /**
    * The email associated with stored payment details.
    */
    'emailAddress'?: string;
}
