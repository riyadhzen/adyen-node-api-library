/**
 * Adyen Recurring API
 * The Recurring APIs allow you to manage and remove your tokens or saved payment details. Tokens should be created with validation during a payment request.  For more information, refer to our [Tokenization documentation](https://docs.adyen.com/online-payments/tokenization). ## Authentication To connect to the Recurring API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/development-resources/api-credentials). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Recurring API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Recurring/v49/disable ```
 *
 * The version of the OpenAPI document: 49
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export declare class ScheduleAccountUpdaterResult {
    /**
    * Adyen\'s 16-character unique reference associated with the transaction. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference': string;
    /**
    * The result of scheduling an Account Updater. If scheduling was successful, this field returns **Success**; otherwise it contains the error message.
    */
    'result': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
