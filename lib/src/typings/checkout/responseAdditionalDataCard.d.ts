export declare class ResponseAdditionalDataCard {
    /**
    * The first six digits of the card number.  This is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with a six-digit BIN.  Example: 521234
    */
    'cardBin'?: string;
    /**
    * The cardholder name passed in the payment request.
    */
    'cardHolderName'?: string;
    /**
    * The bank or the financial institution granting lines of credit through card association branded payment cards. This information can be included when available.
    */
    'cardIssuingBank'?: string;
    /**
    * The country where the card was issued.  Example: US
    */
    'cardIssuingCountry'?: string;
    /**
    * The currency in which the card is issued, if this information is available. Provided as the currency code or currency number from the ISO-4217 standard.   Example: USD
    */
    'cardIssuingCurrency'?: string;
    /**
    * The card payment method used for the transaction.  Example: amex
    */
    'cardPaymentMethod'?: string;
    /**
    * The last four digits of a card number.  > Returned only in case of a card payment.
    */
    'cardSummary'?: string;
    /**
    * The first eight digits of the card number. Only returned if the card number is 16 digits or more.  This is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with an eight-digit BIN.  Example: 52123423
    */
    'issuerBin'?: string;
}
