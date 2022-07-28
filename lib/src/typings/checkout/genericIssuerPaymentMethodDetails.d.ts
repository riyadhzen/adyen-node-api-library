export declare class GenericIssuerPaymentMethodDetails {
    /**
    * The issuer id of the shopper\'s selected bank.
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
    * **genericissuer**
    */
    'type': GenericIssuerPaymentMethodDetails.TypeEnum;
}
export declare namespace GenericIssuerPaymentMethodDetails {
    enum TypeEnum {
        Eps,
        OnlineBankingSK,
        OnlineBankingCZ
    }
}
