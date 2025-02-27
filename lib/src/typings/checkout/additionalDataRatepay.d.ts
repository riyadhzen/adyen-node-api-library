export declare class AdditionalDataRatepay {
    /**
    * Amount the customer has to pay each month.
    */
    'ratepayInstallmentAmount'?: string;
    /**
    * Interest rate of this installment.
    */
    'ratepayInterestRate'?: string;
    /**
    * Amount of the last installment.
    */
    'ratepayLastInstallmentAmount'?: string;
    /**
    * Calendar day of the first payment.
    */
    'ratepayPaymentFirstday'?: string;
    /**
    * Date the merchant delivered the goods to the customer.
    */
    'ratepaydataDeliveryDate'?: string;
    /**
    * Date by which the customer must settle the payment.
    */
    'ratepaydataDueDate'?: string;
    /**
    * Invoice date, defined by the merchant. If not included, the invoice date is set to the delivery date.
    */
    'ratepaydataInvoiceDate'?: string;
    /**
    * Identification name or number for the invoice, defined by the merchant.
    */
    'ratepaydataInvoiceId'?: string;
}
