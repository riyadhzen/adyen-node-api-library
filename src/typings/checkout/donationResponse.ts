/*
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
 * Copyright (c) 2022 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen Checkout API
 *
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Amount } from './amount';
import { PaymentResponse } from './paymentResponse';

export class DonationResponse {
    'amount'?: Amount;
    /**
    * The Adyen account name of your charity. We will provide you with this account name once your chosen charity has been [onboarded](https://docs.adyen.com/online-payments/donations#onboarding).
    */
    'donationAccount'?: string;
    /**
    * Your unique resource identifier.
    */
    'id'?: string;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount'?: string;
    'payment'?: PaymentResponse;
    /**
    * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
    */
    'reference'?: string;
    /**
    * The status of the donation transaction.  Possible values: * **completed** * **pending** * **refused**
    */
    'status'?: DonationResponse.StatusEnum;
}

export namespace DonationResponse {
    export enum StatusEnum {
        Completed = <any> 'completed',
        Pending = <any> 'pending',
        Refused = <any> 'refused'
    }
}
