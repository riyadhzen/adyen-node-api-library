export declare class AdditionalDataCarRental {
    /**
    * Pick-up date. * Date format: `yyyyMMdd`
    */
    'carRentalCheckOutDate'?: string;
    /**
    * The customer service phone number of the car rental company. * Format: Alphanumeric * maxLength: 17
    */
    'carRentalCustomerServiceTollFreeNumber'?: string;
    /**
    * Number of days for which the car is being rented. * Format: Numeric * maxLength: 19
    */
    'carRentalDaysRented'?: string;
    /**
    * Any fuel charges associated with the rental. * Format: Numeric * maxLength: 12
    */
    'carRentalFuelCharges'?: string;
    /**
    * Any insurance charges associated with the rental. * Format: Numeric * maxLength: 12
    */
    'carRentalInsuranceCharges'?: string;
    /**
    * The city from which the car is rented. * Format: Alphanumeric * maxLength: 18
    */
    'carRentalLocationCity'?: string;
    /**
    * The country from which the car is rented. * Format: Alphanumeric * maxLength: 2
    */
    'carRentalLocationCountry'?: string;
    /**
    * The state or province from where the car is rented. * Format: Alphanumeric * maxLength: 3
    */
    'carRentalLocationStateProvince'?: string;
    /**
    * Indicates if the customer was a \"no-show\" (neither keeps nor cancels their booking). * Y - Customer was a no show. * N - Not applicable.
    */
    'carRentalNoShowIndicator'?: string;
    /**
    * Charge associated with not returning a vehicle to the original rental location.
    */
    'carRentalOneWayDropOffCharges'?: string;
    /**
    * Daily rental rate. * Format: Alphanumeric * maxLength: 12
    */
    'carRentalRate'?: string;
    /**
    * Specifies whether the given rate is applied daily or weekly. * D - Daily rate. * W - Weekly rate.
    */
    'carRentalRateIndicator'?: string;
    /**
    * The rental agreement number associated with this car rental. * Format: Alphanumeric * maxLength: 9
    */
    'carRentalRentalAgreementNumber'?: string;
    /**
    * Daily rental rate. * Format: Alphanumeric * maxLength: 12
    */
    'carRentalRentalClassId'?: string;
    /**
    * The name of the person renting the car. * Format: Alphanumeric * maxLength: 26
    */
    'carRentalRenterName'?: string;
    /**
    * The city where the car must be returned. * Format: Alphanumeric * maxLength: 18
    */
    'carRentalReturnCity'?: string;
    /**
    * The country where the car must be returned. * Format: Alphanumeric * maxLength: 2
    */
    'carRentalReturnCountry'?: string;
    /**
    * The last date to return the car by. * Date format: `yyyyMMdd`
    */
    'carRentalReturnDate'?: string;
    /**
    * Agency code, phone number, or address abbreviation * Format: Alphanumeric * maxLength: 10
    */
    'carRentalReturnLocationId'?: string;
    /**
    * The state or province where the car must be returned. * Format: Alphanumeric * maxLength: 3
    */
    'carRentalReturnStateProvince'?: string;
    /**
    * Indicates whether the goods or services were tax-exempt, or tax was not collected.  Values: * Y - Goods or services were tax exempt * N - Tax was not collected
    */
    'carRentalTaxExemptIndicator'?: string;
    /**
    * Number of nights.  This should be included in the auth message. * Format: Numeric * maxLength: 2
    */
    'travelEntertainmentAuthDataDuration'?: string;
    /**
    * Indicates what market-specific dataset will be submitted or is being submitted. Value should be \"A\" for Car rental. This should be included in the auth message. * Format: Alphanumeric * maxLength: 1
    */
    'travelEntertainmentAuthDataMarket'?: string;
}
