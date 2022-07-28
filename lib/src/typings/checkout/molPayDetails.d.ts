export declare class MolPayDetails {
    /**
    * The shopper\'s bank. Specify this with the issuer value that corresponds to this bank.
    */
    'issuer': string;
    /**
    * **molpay**
    */
    'type': MolPayDetails.TypeEnum;
}
export declare namespace MolPayDetails {
    enum TypeEnum {
        FpxMY,
        TH
    }
}
