export declare class CheckoutDonationAction {
    /**
    * A value that must be submitted to the `/payments/details` endpoint to verify this payment.
    */
    'paymentData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * The type of the action.
    */
    'type': CheckoutDonationAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
}
export declare namespace CheckoutDonationAction {
    enum TypeEnum {
        Donate
    }
}
