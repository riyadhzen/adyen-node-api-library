export declare class AdditionalDataRiskStandalone {
    /**
    * Shopper\'s country of residence in the form of ISO standard 3166 2-character country codes.
    */
    'payPalCountryCode'?: string;
    /**
    * Shopper\'s email.
    */
    'payPalEmailId'?: string;
    /**
    * Shopper\'s first name.
    */
    'payPalFirstName'?: string;
    /**
    * Shopper\'s last name.
    */
    'payPalLastName'?: string;
    /**
    * Unique PayPal Customer Account identification number. Character length and limitations: 13 single-byte alphanumeric characters.
    */
    'payPalPayerId'?: string;
    /**
    * Shopper\'s phone number.
    */
    'payPalPhone'?: string;
    /**
    * Allowed values: * **Eligible** — Merchant is protected by PayPal\'s Seller Protection Policy for Unauthorized Payments and Item Not Received.  * **PartiallyEligible** — Merchant is protected by PayPal\'s Seller Protection Policy for Item Not Received.  * **Ineligible** — Merchant is not protected under the Seller Protection Policy.
    */
    'payPalProtectionEligibility'?: string;
    /**
    * Unique transaction ID of the payment.
    */
    'payPalTransactionId'?: string;
    /**
    * Raw AVS result received from the acquirer, where available. Example: D
    */
    'avsResultRaw'?: string;
    /**
    * The Bank Identification Number of a credit card, which is the first six digits of a card number. Required for [tokenized card request](https://docs.adyen.com/risk-management/standalone-risk#tokenised-pan-request).
    */
    'bin'?: string;
    /**
    * Raw CVC result received from the acquirer, where available. Example: 1
    */
    'cvcResultRaw'?: string;
    /**
    * Unique identifier or token for the shopper\'s card details.
    */
    'riskToken'?: string;
    /**
    * A Boolean value indicating whether 3DS authentication was completed on this payment. Example: true
    */
    'threeDAuthenticated'?: string;
    /**
    * A Boolean value indicating whether 3DS was offered for this payment. Example: true
    */
    'threeDOffered'?: string;
    /**
    * Required for PayPal payments only. The only supported value is: **paypal**.
    */
    'tokenDataType'?: string;
}
