export declare class ResponseAdditionalDataSepa {
    /**
    * The transaction signature date.  Format: yyyy-MM-dd
    */
    'sepadirectdebitDateOfSignature'?: string;
    /**
    * Its value corresponds to the pspReference value of the transaction.
    */
    'sepadirectdebitMandateId'?: string;
    /**
    * This field can take one of the following values: * OneOff: (OOFF) Direct debit instruction to initiate exactly one direct debit transaction.  * First: (FRST) Initial/first collection in a series of direct debit instructions. * Recurring: (RCUR) Direct debit instruction to carry out regular direct debit transactions initiated by the creditor. * Final: (FNAL) Last/final collection in a series of direct debit instructions.  Example: OOFF
    */
    'sepadirectdebitSequenceType'?: string;
}
