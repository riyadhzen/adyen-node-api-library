export declare class GiropayDetails {
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **giropay**
    */
    'type'?: GiropayDetails.TypeEnum;
}
export declare namespace GiropayDetails {
    enum TypeEnum {
        Giropay
    }
}
