export declare class IdealDetails {
    /**
    * The iDEAL issuer value of the shopper\'s selected bank. Set this to an **id** of an iDEAL issuer to preselect it.
    */
    'issuer': string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **ideal**
    */
    'type'?: IdealDetails.TypeEnum;
}
export declare namespace IdealDetails {
    enum TypeEnum {
        Ideal
    }
}
