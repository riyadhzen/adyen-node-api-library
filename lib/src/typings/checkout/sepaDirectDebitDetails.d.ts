export declare class SepaDirectDebitDetails {
    /**
    * The International Bank Account Number (IBAN).
    */
    'iban': string;
    /**
    * The name of the bank account holder.
    */
    'ownerName': string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **sepadirectdebit**
    */
    'type'?: SepaDirectDebitDetails.TypeEnum;
}
export declare namespace SepaDirectDebitDetails {
    enum TypeEnum {
        Sepadirectdebit,
        SepadirectdebitAmazonpay
    }
}
