export declare class AdditionalDataLevel23 {
    /**
    * Customer code, if supplied by a customer.  Encoding: ASCII.  Max length: 25 characters.  > Required for Level 2 and Level 3 data.
    */
    'enhancedSchemeDataCustomerReference'?: string;
    /**
    * Destination country code.  Encoding: ASCII.  Max length: 3 characters.
    */
    'enhancedSchemeDataDestinationCountryCode'?: string;
    /**
    * The postal code of a destination address.  Encoding: ASCII.  Max length: 10 characters.  > Required for American Express.
    */
    'enhancedSchemeDataDestinationPostalCode'?: string;
    /**
    * Destination state or province code.  Encoding: ASCII.Max length: 3 characters.
    */
    'enhancedSchemeDataDestinationStateProvinceCode'?: string;
    /**
    * Duty amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeDataDutyAmount'?: string;
    /**
    * Shipping amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeDataFreightAmount'?: string;
    /**
    * Item commodity code.  Encoding: ASCII.  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrCommodityCode'?: string;
    /**
    * Item description.  Encoding: ASCII.  Max length: 26 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrDescription'?: string;
    /**
    * Discount amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrDiscountAmount'?: string;
    /**
    * Product code.  Encoding: ASCII.  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrProductCode'?: string;
    /**
    * Quantity, specified as an integer value.  Value must be greater than 0.  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrQuantity'?: string;
    /**
    * Total amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrTotalAmount'?: string;
    /**
    * Item unit of measurement.  Encoding: ASCII.  Max length: 3 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrUnitOfMeasure'?: string;
    /**
    * Unit price, specified in [minor units](https://docs.adyen.com/development-resources/currency-codes).  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrUnitPrice'?: string;
    /**
    * Order date. * Format: `ddMMyy`  Encoding: ASCII.  Max length: 6 characters.
    */
    'enhancedSchemeDataOrderDate'?: string;
    /**
    * The postal code of a \"ship-from\" address.  Encoding: ASCII.  Max length: 10 characters.
    */
    'enhancedSchemeDataShipFromPostalCode'?: string;
    /**
    * Total tax amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.  > Required for Level 2 and Level 3 data.
    */
    'enhancedSchemeDataTotalTaxAmount'?: string;
}
