/**
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen for Platforms: Notifications
 * The Notification API sends notifications to the endpoints specified in a given subscription. Subscriptions are managed through the Notification Configuration API. The API specifications listed here detail the format of each notification.  For more information, refer to our [documentation](https://docs.adyen.com/platforms/notifications).
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export declare class PersonalDocumentData {
    /**
    * The expiry date of the document,   in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.
    */
    'expirationDate'?: string;
    /**
    * The country where the document was issued, in the two-character  [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.
    */
    'issuerCountry'?: string;
    /**
    * The state where the document was issued (if applicable).
    */
    'issuerState'?: string;
    /**
    * The number in the document.
    */
    'number'?: string;
    /**
    * The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.  To delete an existing entry for a document `type`, send only the `type` field in your request.
    */
    'type': PersonalDocumentData.TypeEnum;
}
export declare namespace PersonalDocumentData {
    enum TypeEnum {
        Drivinglicense,
        Id,
        Passport,
        Socialsecurity,
        Visa
    }
}
