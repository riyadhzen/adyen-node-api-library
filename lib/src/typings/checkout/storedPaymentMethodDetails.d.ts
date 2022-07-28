export declare class StoredPaymentMethodDetails {
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * The payment method type.
    */
    'type'?: StoredPaymentMethodDetails.TypeEnum;
}
export declare namespace StoredPaymentMethodDetails {
    enum TypeEnum {
        BcmcMobile,
        BcmcMobileQR,
        BcmcMobileApp,
        MomoWallet,
        MomoWalletApp,
        PaymayaWallet,
        GrabpaySG,
        GrabpayMY,
        GrabpayTH,
        GrabpayID,
        GrabpayVN,
        GrabpayPH,
        Oxxo,
        Gcash,
        Kakaopay,
        Truemoney
    }
}
