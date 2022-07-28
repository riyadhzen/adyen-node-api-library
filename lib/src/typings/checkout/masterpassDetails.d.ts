export declare class MasterpassDetails {
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: MasterpassDetails.FundingSourceEnum;
    /**
    * The Masterpass transaction ID.
    */
    'masterpassTransactionId': string;
    /**
    * **masterpass**
    */
    'type'?: MasterpassDetails.TypeEnum;
}
export declare namespace MasterpassDetails {
    enum FundingSourceEnum {
        Debit
    }
    enum TypeEnum {
        Masterpass
    }
}
