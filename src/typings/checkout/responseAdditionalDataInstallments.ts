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

export class ResponseAdditionalDataInstallments {
    /**
    * Type of installment. The value of `installmentType` should be **IssuerFinanced**.
    */
    'installmentPaymentDataInstallmentType'?: string;
    /**
    * Annual interest rate.
    */
    'installmentPaymentDataOptionItemNrAnnualPercentageRate'?: string;
    /**
    * First Installment Amount in minor units.
    */
    'installmentPaymentDataOptionItemNrFirstInstallmentAmount'?: string;
    /**
    * Installment fee amount in minor units.
    */
    'installmentPaymentDataOptionItemNrInstallmentFee'?: string;
    /**
    * Interest rate for the installment period.
    */
    'installmentPaymentDataOptionItemNrInterestRate'?: string;
    /**
    * Maximum number of installments possible for this payment.
    */
    'installmentPaymentDataOptionItemNrMaximumNumberOfInstallments'?: string;
    /**
    * Minimum number of installments possible for this payment.
    */
    'installmentPaymentDataOptionItemNrMinimumNumberOfInstallments'?: string;
    /**
    * Total number of installments possible for this payment.
    */
    'installmentPaymentDataOptionItemNrNumberOfInstallments'?: string;
    /**
    * Subsequent Installment Amount in minor units.
    */
    'installmentPaymentDataOptionItemNrSubsequentInstallmentAmount'?: string;
    /**
    * Total amount in minor units.
    */
    'installmentPaymentDataOptionItemNrTotalAmountDue'?: string;
    /**
    * Possible values: * PayInInstallmentsOnly * PayInFullOnly * PayInFullOrInstallments
    */
    'installmentPaymentDataPaymentOptions'?: string;
    /**
    * The number of installments that the payment amount should be charged with.  Example: 5 > Only relevant for card payments in countries that support installments.
    */
    'installmentsValue'?: string;
}

