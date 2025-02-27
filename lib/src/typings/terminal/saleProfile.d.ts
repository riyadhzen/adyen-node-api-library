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
export declare class SaleProfile {
    'GenericProfile'?: SaleProfile.GenericProfileEnum;
    'ServiceProfiles'?: Array<SaleProfile.ServiceProfilesEnum>;
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
export declare namespace SaleProfile {
    enum GenericProfileEnum {
        Basic,
        Extended,
        Standard
    }
    enum ServiceProfilesEnum {
        Batch,
        CardReader,
        Communication,
        Loyalty,
        OneTimeRes,
        Pin,
        Reservation,
        Sound,
        StoredValue,
        Synchro
    }
}
