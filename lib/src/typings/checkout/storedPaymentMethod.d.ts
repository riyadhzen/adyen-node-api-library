export declare class StoredPaymentMethod {
    /**
    * The brand of the card.
    */
    'brand'?: string;
    /**
    * The month the card expires.
    */
    'expiryMonth'?: string;
    /**
    * The last two digits of the year the card expires. For example, **22** for the year 2022.
    */
    'expiryYear'?: string;
    /**
    * The unique payment method code.
    */
    'holderName'?: string;
    /**
    * The IBAN of the bank account.
    */
    'iban'?: string;
    /**
    * A unique identifier of this stored payment method.
    */
    'id'?: string;
    /**
    * The last four digits of the PAN.
    */
    'lastFour'?: string;
    /**
    * The display name of the stored payment method.
    */
    'name'?: string;
    /**
    * Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.  This contains either the Mastercard Trace ID or the Visa Transaction ID.
    */
    'networkTxReference'?: string;
    /**
    * The name of the bank account holder.
    */
    'ownerName'?: string;
    /**
    * The shopper’s email address.
    */
    'shopperEmail'?: string;
    /**
    * The supported shopper interactions for this stored payment method.
    */
    'supportedShopperInteractions'?: Array<string>;
    /**
    * The type of payment method.
    */
    'type'?: string;
}
