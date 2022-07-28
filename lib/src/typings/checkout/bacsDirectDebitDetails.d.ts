export declare class BacsDirectDebitDetails {
    /**
    * The bank account number (without separators).
    */
    'bankAccountNumber'?: string;
    /**
    * The bank routing number of the account.
    */
    'bankLocationId'?: string;
    /**
    * The name of the bank account holder.
    */
    'holderName'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **directdebit_GB**
    */
    'type'?: BacsDirectDebitDetails.TypeEnum;
}
export declare namespace BacsDirectDebitDetails {
    enum TypeEnum {
        DirectdebitGB
    }
}
