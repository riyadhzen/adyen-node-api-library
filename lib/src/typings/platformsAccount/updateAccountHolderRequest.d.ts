/**
 * Adyen for Platforms: Account API
 * The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and KYC-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.  For more information, refer to our [documentation](https://docs.adyen.com/platforms). ## Authentication To connect to the Account API, you must use basic authentication credentials of your web service user. If you don\'t have one, contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Account API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder ```
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AccountHolderDetails } from './accountHolderDetails';
export declare class UpdateAccountHolderRequest {
    /**
    * The code of the Account Holder to be updated.
    */
    'accountHolderCode': string;
    'accountHolderDetails'?: AccountHolderDetails;
    /**
    * A description of the account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.
    */
    'description'?: string;
    /**
    * The legal entity type of the account holder. This determines the information that should be provided in the request.  Possible values: **Business**, **Individual**, or **NonProfit**.  * If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.  * If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.
    */
    'legalEntity'?: UpdateAccountHolderRequest.LegalEntityEnum;
    /**
    * The primary three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), to which the account holder should be updated.
    */
    'primaryCurrency'?: string;
    /**
    * The processing tier to which the Account Holder should be updated. >The processing tier can not be lowered through this request.  >Required if accountHolderDetails are not provided.
    */
    'processingTier'?: number;
    /**
    * The identifier of the profile that applies to this entity.
    */
    'verificationProfile'?: string;
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
export declare namespace UpdateAccountHolderRequest {
    enum LegalEntityEnum {
        Business,
        Individual,
        NonProfit,
        Partnership,
        PublicCompany
    }
}
