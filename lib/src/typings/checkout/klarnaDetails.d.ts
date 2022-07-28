export declare class KlarnaDetails {
    /**
    * The address where to send the invoice.
    */
    'billingAddress'?: string;
    /**
    * The address where the goods should be delivered.
    */
    'deliveryAddress'?: string;
    /**
    * Shopper name, date of birth, phone number, and email address.
    */
    'personalDetails'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **klarna**
    */
    'type': KlarnaDetails.TypeEnum;
}
export declare namespace KlarnaDetails {
    enum TypeEnum {
        Klarna,
        Klarnapayments,
        KlarnapaymentsAccount,
        KlarnapaymentsB2b,
        KlarnaPaynow,
        KlarnaAccount,
        KlarnaB2b
    }
}
