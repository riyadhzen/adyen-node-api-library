export declare class AdditionalDataOpenInvoice {
    /**
    * Holds different merchant data points like product, purchase, customer, and so on. It takes data in a Base64 encoded string.  The `merchantData` parameter needs to be added to the `openinvoicedata` signature at the end.  Since the field is optional, if it\'s not included it does not impact computing the merchant signature.  Applies only to Klarna.  You can contact Klarna for the format and structure of the string.
    */
    'openinvoicedataMerchantData'?: string;
    /**
    * The number of invoice lines included in `openinvoicedata`.  There needs to be at least one line, so `numberOfLines` needs to be at least 1.
    */
    'openinvoicedataNumberOfLines'?: string;
    /**
    * The three-character ISO currency code.
    */
    'openinvoicedataLineItemNrCurrencyCode'?: string;
    /**
    * A text description of the product the invoice line refers to.
    */
    'openinvoicedataLineItemNrDescription'?: string;
    /**
    * The price for one item in the invoice line, represented in minor units.  The due amount for the item, VAT excluded.
    */
    'openinvoicedataLineItemNrItemAmount'?: string;
    /**
    * A unique id for this item. Required for RatePay if the description of each item is not unique.
    */
    'openinvoicedataLineItemNrItemId'?: string;
    /**
    * The VAT due for one item in the invoice line, represented in minor units.
    */
    'openinvoicedataLineItemNrItemVatAmount'?: string;
    /**
    * The VAT percentage for one item in the invoice line, represented in minor units.  For example, 19% VAT is specified as 1900.
    */
    'openinvoicedataLineItemNrItemVatPercentage'?: string;
    /**
    * The number of units purchased of a specific product.
    */
    'openinvoicedataLineItemNrNumberOfItems'?: string;
    /**
    * Name of the shipping company handling the the return shipment.
    */
    'openinvoicedataLineItemNrReturnShippingCompany'?: string;
    /**
    * The tracking number for the return of the shipment.
    */
    'openinvoicedataLineItemNrReturnTrackingNumber'?: string;
    /**
    * URI where the customer can track the return of their shipment.
    */
    'openinvoicedataLineItemNrReturnTrackingUri'?: string;
    /**
    * Name of the shipping company handling the delivery.
    */
    'openinvoicedataLineItemNrShippingCompany'?: string;
    /**
    * Shipping method.
    */
    'openinvoicedataLineItemNrShippingMethod'?: string;
    /**
    * The tracking number for the shipment.
    */
    'openinvoicedataLineItemNrTrackingNumber'?: string;
    /**
    * URI where the customer can track their shipment.
    */
    'openinvoicedataLineItemNrTrackingUri'?: string;
}
