export declare class DokuDetails {
    /**
    * The shopper\'s first name.
    */
    'firstName': string;
    /**
    * The shopper\'s last name.
    */
    'lastName': string;
    /**
    * The shopper\'s email.
    */
    'shopperEmail': string;
    /**
    * **doku**
    */
    'type': DokuDetails.TypeEnum;
}
export declare namespace DokuDetails {
    enum TypeEnum {
        MandiriVa,
        CimbVa,
        DanamonVa,
        BniVa,
        PermataLiteAtm,
        BriVa,
        BcaVa,
        Alfamart,
        Indomaret
    }
}
