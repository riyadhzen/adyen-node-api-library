import { SplitAmount } from './splitAmount';
export declare class Split {
    /**
    * Unique identifier of the account where the split amount should be sent. This is required if `type` is **MarketPlace** or **BalanceAccount**.
    */
    'account'?: string;
    'amount': SplitAmount;
    /**
    * A description of this split.
    */
    'description'?: string;
    /**
    * Your reference for the split, which you can use to link the split to other operations such as captures and refunds.  This is required if `type` is **MarketPlace** or **BalanceAccount**. For the other types, we also recommend sending a reference so you can reconcile the split and the associated payment in the transaction overview and in the reports. If the reference is not provided, the split is reported as part of the aggregated [TransferBalance record type](https://docs.adyen.com/reporting/marketpay-payments-accounting-report) in Adyen for Platforms.
    */
    'reference'?: string;
    /**
    * The type of split. Possible values: **Default**, **PaymentFee**, **VAT**, **Commission**, **MarketPlace**, **BalanceAccount**, **Remainder**.
    */
    'type': Split.TypeEnum;
}
export declare namespace Split {
    enum TypeEnum {
        BalanceAccount,
        Commission,
        Default,
        MarketPlace,
        PaymentFee,
        Remainder,
        VAT,
        Verification
    }
}
