export declare class StandalonePaymentCancelResource {
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference) of the payment to cancel.
    */
    'paymentReference': string;
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
    'status': StandalonePaymentCancelResource.StatusEnum;
}
export declare namespace StandalonePaymentCancelResource {
    enum StatusEnum {
        Received
    }
}
