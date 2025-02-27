export declare class UpiCollectDetails {
    /**
    * The sequence number for the debit. For example, send **2** if this is the second debit for the subscription. The sequence number is included in the notification sent to the shopper.
    */
    'billingSequenceNumber': string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only.
    */
    'shopperNotificationReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **upi_collect**
    */
    'type': UpiCollectDetails.TypeEnum;
    /**
    * The virtual payment address for UPI.
    */
    'virtualPaymentAddress'?: string;
}
export declare namespace UpiCollectDetails {
    enum TypeEnum {
        UpiCollect
    }
}
