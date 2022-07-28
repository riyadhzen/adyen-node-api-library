export declare class CreateStandalonePaymentCancelRequest {
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference) of the payment that you want to cancel.
    */
    'paymentReference': string;
    /**
    * Your reference for the cancel request. Maximum length: 80 characters.
    */
    'reference'?: string;
}
