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
import { DisplayOutput } from './displayOutput';
export declare class CardReaderInitRequest {
    'DisplayOutput'?: DisplayOutput;
    'ForceEntryMode'?: Array<Array<CardReaderInitRequest.ForceEntryModeEnum>>;
    'LeaveCardFlag'?: boolean;
    'MaxWaitingTime'?: number;
    'WarmResetFlag'?: boolean;
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
export declare namespace CardReaderInitRequest {
    enum ForceEntryModeEnum {
        CheckReader,
        Contactless,
        File,
        Icc,
        Keyed,
        MagStripe,
        Manual,
        Rfid,
        Scanned,
        SynchronousIcc,
        Tapped
    }
}
