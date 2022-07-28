export declare class BillDeskDetails {
    /**
    * The issuer id of the shopper\'s selected bank.
    */
    'issuer': string;
    /**
    * **billdesk**
    */
    'type': BillDeskDetails.TypeEnum;
}
export declare namespace BillDeskDetails {
    enum TypeEnum {
        BilldeskOnline,
        BilldeskWallet,
        OnlinebankingIN,
        WalletIN
    }
}
