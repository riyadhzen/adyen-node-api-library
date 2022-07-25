/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Opi {
    /**
    * Indicates if Pay at Table is enabled.
    */
    'enablePayAtTable'?: boolean;
    /**
    * The store number to use for Pay at Table.
    */
    'payAtTableStoreNumber'?: string;
    /**
    * The URL and port number used for Pay at Table communication.
    */
    'payAtTableURL'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enablePayAtTable",
            "baseName": "enablePayAtTable",
            "type": "boolean"
        },
        {
            "name": "payAtTableStoreNumber",
            "baseName": "payAtTableStoreNumber",
            "type": "string"
        },
        {
            "name": "payAtTableURL",
            "baseName": "payAtTableURL",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Opi.attributeTypeMap;
    }
}

