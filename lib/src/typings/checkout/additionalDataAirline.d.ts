export declare class AdditionalDataAirline {
    /**
    * Reference number for the invoice, issued by the agency. * minLength: 1 * maxLength: 6
    */
    'airlineAgencyInvoiceNumber'?: string;
    /**
    * 2-letter agency plan identifier; alphabetical. * minLength: 2 * maxLength: 2
    */
    'airlineAgencyPlanName'?: string;
    /**
    * [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX); numeric. It identifies the carrier. * Format: IATA 3-digit accounting code (PAX) * Example: KLM = 074 * minLength: 3 * maxLength: 3
    */
    'airlineAirlineCode'?: string;
    /**
    * [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX); alphabetical. It identifies the carrier. * Format: [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter airline code * Example: KLM = KL * minLength: 2 * maxLength: 2
    */
    'airlineAirlineDesignatorCode'?: string;
    /**
    * Chargeable amount for boarding the plane. The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes). * minLength: 1 * maxLength: 18
    */
    'airlineBoardingFee'?: string;
    /**
    * The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the reservation and purchase the ticket. * Format: alphanumeric. * minLength: 4 * maxLength: 4
    */
    'airlineComputerizedReservationSystem'?: string;
    /**
    * Reference number; alphanumeric. * minLength: 0 * maxLength: 20
    */
    'airlineCustomerReferenceNumber'?: string;
    /**
    * Optional 2-digit code; alphanumeric. It identifies the type of product of the transaction. The description of the code may appear on credit card statements. * Format: 2-digit code * Example: Passenger ticket = 01 * minLength: 2 * maxLength: 2
    */
    'airlineDocumentType'?: string;
    /**
    * Flight departure date. Local time `(HH:mm)` is optional. * Date format: `yyyy-MM-dd` * Date and time format: `yyyy-MM-dd HH:mm` * minLength: 10 * maxLength: 16
    */
    'airlineFlightDate'?: string;
    /**
    * [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX); alphabetical. It identifies the carrier. This field is required/mandatory if the airline data includes leg details. * Format: IATA 2-letter airline code * Example: KLM = KL * minLength: 2 * maxLength: 2
    */
    'airlineLegCarrierCode'?: string;
    /**
    * 1-letter travel class identifier; alphabetical. There is no standard; however, the following codes are used rather consistently: * F: first class * J: business class * Y: economy class * W: premium economy  Limitations: * minLength: 1 * maxLength: 1
    */
    'airlineLegClassOfTravel'?: string;
    /**
    *   Date and time of travel. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-compliant. * Format: `yyyy-MM-dd HH:mm` * minLength: 16 * maxLength: 16
    */
    'airlineLegDateOfTravel'?: string;
    /**
    * Alphabetical identifier of the departure airport. This field is required if the airline data includes leg details. * Format: [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code. * Example: Amsterdam = AMS * minLength: 3 * maxLength: 3
    */
    'airlineLegDepartAirport'?: string;
    /**
    * [Departure tax](https://en.wikipedia.org/wiki/Departure_tax). Amount charged by a country to an individual upon their leaving. The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes). * minLength: 1 * maxLength: 12
    */
    'airlineLegDepartTax'?: string;
    /**
    * Alphabetical identifier of the destination/arrival airport. This field is required/mandatory if the airline data includes leg details. * Format: [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code. * Example: Amsterdam = AMS * minLength: 3 * maxLength: 3
    */
    'airlineLegDestinationCode'?: string;
    /**
    * [Fare basis code](https://en.wikipedia.org/wiki/Fare_basis_code); alphanumeric. * minLength: 1 * maxLength: 7
    */
    'airlineLegFareBaseCode'?: string;
    /**
    * The flight identifier. * minLength: 1 * maxLength: 5
    */
    'airlineLegFlightNumber'?: string;
    /**
    * 1-letter code that indicates whether the passenger is entitled to make a stopover. Only two types of characters are allowed: * O: Stopover allowed * X: Stopover not allowed  Limitations: * minLength: 1 * maxLength: 1
    */
    'airlineLegStopOverCode'?: string;
    /**
    * Date of birth of the passenger.  Date format: `yyyy-MM-dd` * minLength: 10 * maxLength: 10
    */
    'airlinePassengerDateOfBirth'?: string;
    /**
    * Passenger first name/given name. > This field is required/mandatory if the airline data includes passenger details or leg details.
    */
    'airlinePassengerFirstName'?: string;
    /**
    * Passenger last name/family name. > This field is required/mandatory if the airline data includes passenger details or leg details.
    */
    'airlinePassengerLastName'?: string;
    /**
    * Telephone number of the passenger, including country code. This is an alphanumeric field that can include the \'+\' and \'-\' signs. * minLength: 3 * maxLength: 30
    */
    'airlinePassengerTelephoneNumber'?: string;
    /**
    * Passenger type code (PTC). IATA PTC values are 3-letter alphabetical. Example: ADT, SRC, CNN, INS.  However, several carriers use non-standard codes that can be up to 5 alphanumeric characters. * minLength: 3 * maxLength: 6
    */
    'airlinePassengerTravellerType'?: string;
    /**
    * Passenger name, initials, and a title. * Format: last name + first name or initials + title. * Example: *FLYER / MARY MS*. * minLength: 1 * maxLength: 49
    */
    'airlinePassengerName': string;
    /**
    * Address of the place/agency that issued the ticket. * minLength: 0 * maxLength: 16
    */
    'airlineTicketIssueAddress'?: string;
    /**
    * The ticket\'s unique identifier. * minLength: 1 * maxLength: 150
    */
    'airlineTicketNumber'?: string;
    /**
    * IATA number, also ARC number or ARC/IATA number. Unique identifier number for travel agencies. * minLength: 1 * maxLength: 8
    */
    'airlineTravelAgencyCode'?: string;
    /**
    * The name of the travel agency. * minLength: 1 * maxLength: 25
    */
    'airlineTravelAgencyName'?: string;
}
