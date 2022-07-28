export declare class Avs {
    /**
    * Indicates whether the shopper is allowed to modify the billing address for the current payment request.
    */
    'addressEditable'?: boolean;
    /**
    * Specifies whether the shopper should enter their billing address during checkout.  Allowed values: * yes — Perform AVS checks for every card payment. * automatic — Perform AVS checks only when required to optimize the conversion rate. * no — Do not perform AVS checks.
    */
    'enabled'?: Avs.EnabledEnum;
}
export declare namespace Avs {
    enum EnabledEnum {
        Yes,
        No,
        Automatic
    }
}
