export declare class BlikDetails {
    /**
    * BLIK code consisting of 6 digits.
    */
    'blikCode'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **blik**
    */
    'type'?: BlikDetails.TypeEnum;
}
export declare namespace BlikDetails {
    enum TypeEnum {
        Blik
    }
}
