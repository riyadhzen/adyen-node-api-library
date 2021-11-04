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

import { AccountFundsBelowThresholdNotificationContent } from './accountFundsBelowThresholdNotificationContent';
import { NotificationErrorContainer } from './notificationErrorContainer';

export class AccountFundsBelowThresholdNotification {
    'content'?: AccountFundsBelowThresholdNotificationContent;
    'error'?: NotificationErrorContainer;
    /**
    * The date and time when an event has been completed.
    */
    'eventDate': Date;
    /**
    * The event type of the notification.
    */
    'eventType': string;
    /**
    * The user or process that has triggered the notification.
    */
    'executingUserKey': string;
    /**
    * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
    */
    'live': boolean;
    /**
    * The PSP reference of the request from which the notification originates.
    */
    'pspReference': string;
}

