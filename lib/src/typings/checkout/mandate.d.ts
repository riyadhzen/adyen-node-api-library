export declare class Mandate {
    /**
    * The billing amount (in minor units) of the recurring transactions.
    */
    'amount': string;
    /**
    * The limitation rule of the billing amount.  Possible values:  * **max**: The transaction amount can not exceed the `amount`.   * **exact**: The transaction amount should be the same as the `amount`.
    */
    'amountRule'?: Mandate.AmountRuleEnum;
    /**
    * The rule to specify the period, within which the recurring debit can happen, relative to the mandate recurring date.  Possible values:   * **on**: On a specific date.   * **before**:  Before and on a specific date.   * **after**: On and after a specific date.
    */
    'billingAttemptsRule'?: Mandate.BillingAttemptsRuleEnum;
    /**
    * The number of the day, on which the recurring debit can happen. Should be within the same calendar month as the mandate recurring date.  Possible values: 1-31 based on the `frequency`.
    */
    'billingDay'?: string;
    /**
    * End date of the billing plan, in YYYY-MM-DD format.
    */
    'endsAt': string;
    /**
    * The frequency with which a shopper should be charged.  Possible values: **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**, **yearly**.
    */
    'frequency': Mandate.FrequencyEnum;
    /**
    * The message shown by UPI to the shopper on the approval screen.
    */
    'remarks'?: string;
    /**
    * Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date.
    */
    'startsAt'?: string;
}
export declare namespace Mandate {
    enum AmountRuleEnum {
        Max,
        Exact
    }
    enum BillingAttemptsRuleEnum {
        On,
        Before,
        After
    }
    enum FrequencyEnum {
        Adhoc,
        Daily,
        Weekly,
        BiWeekly,
        Monthly,
        Quarterly,
        HalfYearly,
        Yearly
    }
}
