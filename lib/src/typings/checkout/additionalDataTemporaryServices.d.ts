export declare class AdditionalDataTemporaryServices {
    /**
    * Customer code, if supplied by a customer. * Encoding: ASCII * maxLength: 25
    */
    'enhancedSchemeDataCustomerReference'?: string;
    /**
    * Name or ID associated with the individual working in a temporary capacity. * maxLength: 40
    */
    'enhancedSchemeDataEmployeeName'?: string;
    /**
    * Description of the job or task of the individual working in a temporary capacity. * maxLength: 40
    */
    'enhancedSchemeDataJobDescription'?: string;
    /**
    * Amount paid per regular hours worked, minor units. * maxLength: 7
    */
    'enhancedSchemeDataRegularHoursRate'?: string;
    /**
    * Amount of time worked during a normal operation for the task or job. * maxLength: 7
    */
    'enhancedSchemeDataRegularHoursWorked'?: string;
    /**
    * Name of the individual requesting temporary services. * maxLength: 40
    */
    'enhancedSchemeDataRequestName'?: string;
    /**
    * Date for the beginning of the pay period. * Format: ddMMyy * maxLength: 6
    */
    'enhancedSchemeDataTempStartDate'?: string;
    /**
    * Date of the end of the billing cycle. * Format: ddMMyy * maxLength: 6
    */
    'enhancedSchemeDataTempWeekEnding'?: string;
    /**
    * Total tax amount, in minor units. For example, 2000 means USD 20.00 * maxLength: 12
    */
    'enhancedSchemeDataTotalTaxAmount'?: string;
}
