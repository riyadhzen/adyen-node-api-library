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
import { Split } from './split';

export class CreatePaymentAmountUpdateRequest {
    'amount': Amount;
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The reason for the amount update. Possible values:  * **delayedCharge**  * **noShow**
    */
    'reason'?: CreatePaymentAmountUpdateRequest.ReasonEnum;
    /**
    * Your reference for the amount update request. Maximum length: 80 characters.
    */
    'reference'?: string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
    */
    'splits'?: Array<Split>;
}

export namespace CreatePaymentAmountUpdateRequest {
    export enum ReasonEnum {
        DelayedCharge = <any> 'delayedCharge',
        NoShow = <any> 'noShow'
    }
}
