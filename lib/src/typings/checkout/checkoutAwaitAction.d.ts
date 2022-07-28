export declare class CheckoutAwaitAction {
    /**
    * A value that must be submitted to the `/payments/details` endpoint to verify this payment.
    */
    'paymentData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * **await**
    */
    'type': CheckoutAwaitAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
}
export declare namespace CheckoutAwaitAction {
    enum TypeEnum {
        Await
    }
}
