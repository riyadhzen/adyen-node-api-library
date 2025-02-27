export declare class EcontextVoucherDetails {
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
    * The shopper\'s contact number. It must have an international number format, for example **+31 20 779 1846**. Formats like **+31 (0)20 779 1846** or **0031 20 779 1846** are not accepted.
    */
    'telephoneNumber': string;
    /**
    * **econtextvoucher**
    */
    'type': EcontextVoucherDetails.TypeEnum;
}
export declare namespace EcontextVoucherDetails {
    enum TypeEnum {
        Seveneleven,
        Stores
    }
}
