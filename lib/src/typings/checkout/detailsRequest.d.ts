import { PaymentCompletionDetails } from './paymentCompletionDetails';
export declare class DetailsRequest {
    'details': PaymentCompletionDetails;
    /**
    * The `paymentData` value from the `/payments` response. Required if the `/payments` response returns this value.
    */
    'paymentData'?: string;
    /**
    * Change the `authenticationOnly` indicator originally set in the `/payments` request. Only needs to be set if you want to modify the value set previously.
    */
    'threeDSAuthenticationOnly'?: boolean;
}
