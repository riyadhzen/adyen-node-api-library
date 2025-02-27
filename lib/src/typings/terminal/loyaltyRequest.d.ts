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
import { LoyaltyData } from './loyaltyData';
import { LoyaltyTransaction } from './loyaltyTransaction';
import { SaleData } from './saleData';
export declare class LoyaltyRequest {
    'LoyaltyData'?: Array<LoyaltyData>;
    'LoyaltyTransaction': LoyaltyTransaction;
    'SaleData': SaleData;
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
