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
import { AccountHolderStatus } from './accountHolderStatus';
import { ErrorFieldType } from './errorFieldType';
import { KYCVerificationResult2 } from './kYCVerificationResult2';
export declare class UpdateAccountHolderResponse {
    /**
    * The code of the account holder.
    */
    'accountHolderCode'?: string;
    'accountHolderDetails'?: AccountHolderDetails;
    'accountHolderStatus': AccountHolderStatus;
    /**
    * The description of the account holder.
    */
    'description'?: string;
    /**
    * in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * The legal entity of the account holder.
    */
    'legalEntity': UpdateAccountHolderResponse.LegalEntityEnum;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
    */
    'primaryCurrency'?: string;
    /**
    * The reference of a request. Can be used to uniquely identify the request.
    */
    'pspReference'?: string;
    /**
    * The result code.
    */
    'resultCode'?: string;
    'verification': KYCVerificationResult2;
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
export declare namespace UpdateAccountHolderResponse {
    enum LegalEntityEnum {
        Business,
        Individual,
        NonProfit,
        Partnership,
        PublicCompany
    }
}
