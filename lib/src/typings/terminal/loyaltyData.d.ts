/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LoyaltyAccountId } from './loyaltyAccountId';
import { LoyaltyAmount } from './loyaltyAmount';
import { TransactionIdentification } from './transactionIdentification';
export declare class LoyaltyData {
    'CardAcquisitionReference'?: TransactionIdentification;
    'LoyaltyAccountID'?: LoyaltyAccountId;
    'LoyaltyAmount'?: LoyaltyAmount;
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
