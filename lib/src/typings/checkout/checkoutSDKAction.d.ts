export declare class CheckoutSDKAction {
    /**
    * A value that must be submitted to the `/payments/details` endpoint to verify this payment.
    */
    'paymentData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * The data to pass to the SDK.
    */
    'sdkData'?: {
        [key: string]: string;
    };
    /**
    * The type of the action.
    */
    'type': CheckoutSDKAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
}
export declare namespace CheckoutSDKAction {
    enum TypeEnum {
        Sdk,
        WechatpaySDK
    }
}
