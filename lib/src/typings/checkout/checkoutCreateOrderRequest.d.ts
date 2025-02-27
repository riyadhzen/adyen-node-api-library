import { Amount } from './amount';
export declare class CheckoutCreateOrderRequest {
    'amount': Amount;
    /**
    * The date that order expires; e.g. 2019-03-23T12:25:28Z. If not provided, the default expiry duration is 1 day.
    */
    'expiresAt'?: string;
    /**
    * The merchant account identifier, with which you want to process the order.
    */
    'merchantAccount': string;
    /**
    * A custom reference identifying the order.
    */
    'reference': string;
}
