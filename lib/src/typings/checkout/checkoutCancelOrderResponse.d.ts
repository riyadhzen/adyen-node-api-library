export declare class CheckoutCancelOrderResponse {
    /**
    * A unique reference of the cancellation request.
    */
    'pspReference': string;
    /**
    * The result of the cancellation request.  Possible values:  * **Received** – Indicates the cancellation has successfully been received by Adyen, and will be processed.
    */
    'resultCode': CheckoutCancelOrderResponse.ResultCodeEnum;
}
export declare namespace CheckoutCancelOrderResponse {
    enum ResultCodeEnum {
        Received
    }
}
