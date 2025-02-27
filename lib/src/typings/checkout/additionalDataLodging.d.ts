export declare class AdditionalDataLodging {
    /**
    * The arrival date. * Date format: `yyyyMMdd`
    */
    'lodgingCheckInDate'?: string;
    /**
    * The departure date. * Date format: `yyyyMMdd`
    */
    'lodgingCheckOutDate'?: string;
    /**
    * The toll free phone number for the hotel/lodgings. * Format: Alphanumeric * maxLength: 17
    */
    'lodgingCustomerServiceTollFreeNumber'?: string;
    /**
    * Identifies that the facility complies with the Hotel and Motel Fire Safety Act of 1990. Values can be: \'Y\' or \'N\'. * Format: Alphabetic * maxLength: 1
    */
    'lodgingFireSafetyActIndicator'?: string;
    /**
    * The folio cash advances. * Format: Numeric * maxLength: 12
    */
    'lodgingFolioCashAdvances'?: string;
    /**
    * Card acceptor’s internal invoice or billing ID reference number. * Format: Alphanumeric * maxLength: 25
    */
    'lodgingFolioNumber'?: string;
    /**
    * Any charges for food and beverages associated with the booking. * Format: Numeric * maxLength: 12
    */
    'lodgingFoodBeverageCharges'?: string;
    /**
    * Indicates if the customer was a \"no-show\" (neither keeps nor cancels their booking).  Value should be Y or N. * Format: Numeric * maxLength: 1
    */
    'lodgingNoShowIndicator'?: string;
    /**
    * Prepaid expenses for the booking. * Format: Numeric * maxLength: 12
    */
    'lodgingPrepaidExpenses'?: string;
    /**
    * Identifies specific lodging property location by its local phone number. * Format: Alphanumeric * maxLength: 17
    */
    'lodgingPropertyPhoneNumber'?: string;
    /**
    * Total number of nights the room will be rented. * Format: Numeric * maxLength: 4
    */
    'lodgingRoom1NumberOfNights'?: string;
    /**
    * The rate of the room. * Format: Numeric * maxLength: 12
    */
    'lodgingRoom1Rate'?: string;
    /**
    * The total amount of tax to be paid. * Format: Numeric * maxLength: 12
    */
    'lodgingRoom1Tax'?: string;
    /**
    * Total room tax amount. * Format: Numeric * maxLength: 12
    */
    'lodgingTotalRoomTax'?: string;
    /**
    * Total tax amount. * Format: Numeric * maxLength: 12
    */
    'lodgingTotalTax'?: string;
    /**
    * Number of nights. This should be included in the auth message. * Format: Numeric * maxLength: 2
    */
    'travelEntertainmentAuthDataDuration'?: string;
    /**
    * Indicates what market-specific dataset will be submitted or is being submitted. Value should be \"H\" for Hotel. This should be included in the auth message.  * Format: Alphanumeric * maxLength: 1
    */
    'travelEntertainmentAuthDataMarket'?: string;
}
