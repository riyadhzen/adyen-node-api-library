export declare class PayWithGoogleDetails {
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: PayWithGoogleDetails.FundingSourceEnum;
    /**
    * The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.
    */
    'googlePayToken': string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **paywithgoogle**
    */
    'type'?: PayWithGoogleDetails.TypeEnum;
}
export declare namespace PayWithGoogleDetails {
    enum FundingSourceEnum {
        Debit
    }
    enum TypeEnum {
        Paywithgoogle
    }
}
