export declare class CardDetails {
    /**
    * Secondary brand of the card. For example: **plastix**, **hmclub**.
    */
    'brand'?: string;
    'cupsecureplusSmscode'?: string;
    /**
    * The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'cvc'?: string;
    /**
    * The encrypted card number.
    */
    'encryptedCardNumber': string;
    /**
    * The encrypted card expiry month.
    */
    'encryptedExpiryMonth': string;
    /**
    * The encrypted card expiry year.
    */
    'encryptedExpiryYear': string;
    /**
    * The encrypted card verification code.
    */
    'encryptedSecurityCode'?: string;
    /**
    * The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'expiryMonth'?: string;
    /**
    * The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'expiryYear'?: string;
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: CardDetails.FundingSourceEnum;
    /**
    * The name of the card holder.
    */
    'holderName'?: string;
    /**
    * The network token reference. This is the [`networkTxReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_additionalData-ResponseAdditionalDataCommon-networkTxReference) from the response to the first payment.
    */
    'networkPaymentReference'?: string;
    /**
    * The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'number'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used only for recurring payments in India.
    */
    'shopperNotificationReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * Version of the 3D Secure 2 mobile SDK.
    */
    'threeDS2SdkVersion'?: string;
    /**
    * Default payment method details. Common for scheme payment methods, and for simple payment method details.
    */
    'type'?: CardDetails.TypeEnum;
}
export declare namespace CardDetails {
    enum FundingSourceEnum {
        Debit
    }
    enum TypeEnum {
        Scheme,
        NetworkToken,
        Giftcard,
        Alliancedata,
        Card,
        Qiwiwallet,
        LianlianpayEbankingEnterprise,
        LianlianpayEbankingCredit,
        LianlianpayEbankingDebit,
        Entercash
    }
}
