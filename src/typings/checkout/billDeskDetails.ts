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

export class BillDeskDetails {
    /**
    * The issuer id of the shopper\'s selected bank.
    */
    'issuer': string;
    /**
    * **billdesk**
    */
    'type': BillDeskDetails.TypeEnum;
}

export namespace BillDeskDetails {
    export enum TypeEnum {
        BilldeskOnline = <any> 'billdesk_online',
        BilldeskWallet = <any> 'billdesk_wallet',
        OnlinebankingIN = <any> 'onlinebanking_IN',
        WalletIN = <any> 'wallet_IN'
    }
}
