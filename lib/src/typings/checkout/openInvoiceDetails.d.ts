export declare class OpenInvoiceDetails {
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
    * **openinvoice**
    */
    'type'?: OpenInvoiceDetails.TypeEnum;
}
export declare namespace OpenInvoiceDetails {
    enum TypeEnum {
        Openinvoice,
        AfterpayDirectdebit,
        AtomePos
    }
}
