/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Logo {
    /**
    * The image file, converted to a Base64-encoded string, of the logo to be shown on the terminal.
    */
    'data'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Logo.attributeTypeMap;
    }
}

