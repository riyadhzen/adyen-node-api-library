export declare class CheckoutQrCodeAction {
    /**
    * Expiry time of the QR code.
    */
    'expiresAt'?: string;
    /**
    * A value that must be submitted to the `/payments/details` endpoint to verify this payment.
    */
    'paymentData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * The contents of the QR code as a UTF8 string.
    */
    'qrCodeData'?: string;
    /**
    * **qrCode**
    */
    'type': CheckoutQrCodeAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
}
export declare namespace CheckoutQrCodeAction {
    enum TypeEnum {
        QrCode
    }
}
