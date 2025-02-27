export declare class CheckoutRedirectAction {
    /**
    * When the redirect URL must be accessed via POST, use this data to post to the redirect URL.
    */
    'data'?: {
        [key: string]: string;
    };
    /**
    * Specifies the HTTP method, for example GET or POST.
    */
    'method'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * **redirect**
    */
    'type': CheckoutRedirectAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
}
export declare namespace CheckoutRedirectAction {
    enum TypeEnum {
        Redirect
    }
}
