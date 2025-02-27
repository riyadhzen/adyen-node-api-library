export declare class InstallmentOption {
    /**
    * The maximum number of installments offered for this payment method.
    */
    'maxValue'?: number;
    /**
    * Defines the type of installment plan. If not set, defaults to **regular**.  Possible values: * **regular** * **revolving**
    */
    'plans'?: Array<InstallmentOption.PlansEnum>;
    /**
    * Preselected number of installments offered for this payment method.
    */
    'preselectedValue'?: number;
    /**
    * An array of the number of installments that the shopper can choose from. For example, **[2,3,5]**. This cannot be specified simultaneously with `maxValue`.
    */
    'values'?: Array<number>;
}
export declare namespace InstallmentOption {
    enum PlansEnum {
        Regular,
        Revolving
    }
}
