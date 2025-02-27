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

export class ResponseAdditionalDataBillingAddress {
    /**
    * The billing address city passed in the payment request.
    */
    'billingAddressCity'?: string;
    /**
    * The billing address country passed in the payment request.  Example: NL
    */
    'billingAddressCountry'?: string;
    /**
    * The billing address house number or name passed in the payment request.
    */
    'billingAddressHouseNumberOrName'?: string;
    /**
    * The billing address postal code passed in the payment request.  Example: 1011 DJ
    */
    'billingAddressPostalCode'?: string;
    /**
    * The billing address state or province passed in the payment request.  Example: NH
    */
    'billingAddressStateOrProvince'?: string;
    /**
    * The billing address street passed in the payment request.
    */
    'billingAddressStreet'?: string;
}

