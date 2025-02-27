export declare class PaymentReversalResource {
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to reverse.
    */
    'paymentPspReference': string;
    /**
    * Adyen\'s 16-character reference associated with the reversal request.
    */
    'pspReference': string;
    /**
    * Your reference for the reversal request.
    */
    'reference'?: string;
    /**
    * The status of your request. This will always have the value **received**.
    */
    'status': PaymentReversalResource.StatusEnum;
}
export declare namespace PaymentReversalResource {
    enum StatusEnum {
        Received
    }
}
