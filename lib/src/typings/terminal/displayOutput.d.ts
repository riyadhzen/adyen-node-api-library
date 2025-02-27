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
import { DeviceType } from './deviceType';
import { InfoQualifyType } from './infoQualifyType';
import { MenuEntry } from './menuEntry';
import { OutputContent } from './outputContent';
export declare class DisplayOutput {
    'Device': DeviceType;
    'InfoQualify': InfoQualifyType;
    'MenuEntry'?: Array<MenuEntry>;
    'MinimumDisplayTime'?: number;
    'OutputContent': OutputContent;
    'OutputSignature'?: any | null;
    'ResponseRequiredFlag'?: boolean;
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
