export declare class PaymentCancelResource {
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to cancel.
    */
    'paymentPspReference': string;
    /**
    * Adyen\'s 16-character reference associated with the cancel request.
    */
    'pspReference': string;
    /**
    * Your reference for the cancel request.
    */
    'reference'?: string;
    /**
    * The status of your request. This will always have the value **received**.
    */
    'status': PaymentCancelResource.StatusEnum;
}
export declare namespace PaymentCancelResource {
    enum StatusEnum {
        Received
    }
}
