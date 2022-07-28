export declare class DotpayDetails {
    /**
    * The Dotpay issuer value of the shopper\'s selected bank. Set this to an **id** of a Dotpay issuer to preselect it.
    */
    'issuer': string;
    /**
    * **dotpay**
    */
    'type'?: DotpayDetails.TypeEnum;
}
export declare namespace DotpayDetails {
    enum TypeEnum {
        Dotpay
    }
}
