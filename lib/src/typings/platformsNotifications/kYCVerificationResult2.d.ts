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
import { KYCCheckResult2 } from './kYCCheckResult2';
import { KYCLegalArrangementCheckResult } from './kYCLegalArrangementCheckResult';
import { KYCLegalArrangementEntityCheckResult } from './kYCLegalArrangementEntityCheckResult';
import { KYCPayoutMethodCheckResult } from './kYCPayoutMethodCheckResult';
import { KYCShareholderCheckResult } from './kYCShareholderCheckResult';
import { KYCSignatoryCheckResult } from './kYCSignatoryCheckResult';
import { KYCUltimateParentCompanyCheckResult } from './kYCUltimateParentCompanyCheckResult';
export declare class KYCVerificationResult2 {
    'accountHolder'?: KYCCheckResult2;
    /**
    * The results of the checks on the legal arrangements.
    */
    'legalArrangements'?: Array<KYCLegalArrangementCheckResult>;
    /**
    * The results of the checks on the legal arrangement entities.
    */
    'legalArrangementsEntities'?: Array<KYCLegalArrangementEntityCheckResult>;
    /**
    * The results of the checks on the payout methods.
    */
    'payoutMethods'?: Array<KYCPayoutMethodCheckResult>;
    /**
    * The results of the checks on the shareholders.
    */
    'shareholders'?: Array<KYCShareholderCheckResult>;
    /**
    * The results of the checks on the signatories.
    */
    'signatories'?: Array<KYCSignatoryCheckResult>;
    /**
    * The result of the check on the Ultimate Parent Company.
    */
    'ultimateParentCompany'?: Array<KYCUltimateParentCompanyCheckResult>;
}
