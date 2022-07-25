/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ReceiptPrinting {
    /**
    * Print a merchant receipt when the payment is approved.
    */
    'merchantApproved'?: boolean;
    /**
    * Print a merchant receipt when the transaction is cancelled.
    */
    'merchantCancelled'?: boolean;
    /**
    * Print a merchant receipt when capturing the payment is approved.
    */
    'merchantCaptureApproved'?: boolean;
    /**
    * Print a merchant receipt when capturing the payment is refused.
    */
    'merchantCaptureRefused'?: boolean;
    /**
    * Print a merchant receipt when the refund is approved.
    */
    'merchantRefundApproved'?: boolean;
    /**
    * Print a merchant receipt when the refund is refused.
    */
    'merchantRefundRefused'?: boolean;
    /**
    * Print a merchant receipt when the payment is refused.
    */
    'merchantRefused'?: boolean;
    /**
    * Print a merchant receipt when a previous transaction is voided.
    */
    'merchantVoid'?: boolean;
    /**
    * Print a shopper receipt when the payment is approved.
    */
    'shopperApproved'?: boolean;
    /**
    * Print a shopper receipt when the transaction is cancelled.
    */
    'shopperCancelled'?: boolean;
    /**
    * Print a shopper receipt when capturing the payment is approved.
    */
    'shopperCaptureApproved'?: boolean;
    /**
    * Print a shopper receipt when capturing the payment is refused.
    */
    'shopperCaptureRefused'?: boolean;
    /**
    * Print a shopper receipt when the refund is approved.
    */
    'shopperRefundApproved'?: boolean;
    /**
    * Print a shopper receipt when the refund is refused.
    */
    'shopperRefundRefused'?: boolean;
    /**
    * Print a shopper receipt when the payment is refused.
    */
    'shopperRefused'?: boolean;
    /**
    * Print a shopper receipt when a previous transaction is voided.
    */
    'shopperVoid'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantApproved",
            "baseName": "merchantApproved",
            "type": "boolean"
        },
        {
            "name": "merchantCancelled",
            "baseName": "merchantCancelled",
            "type": "boolean"
        },
        {
            "name": "merchantCaptureApproved",
            "baseName": "merchantCaptureApproved",
            "type": "boolean"
        },
        {
            "name": "merchantCaptureRefused",
            "baseName": "merchantCaptureRefused",
            "type": "boolean"
        },
        {
            "name": "merchantRefundApproved",
            "baseName": "merchantRefundApproved",
            "type": "boolean"
        },
        {
            "name": "merchantRefundRefused",
            "baseName": "merchantRefundRefused",
            "type": "boolean"
        },
        {
            "name": "merchantRefused",
            "baseName": "merchantRefused",
            "type": "boolean"
        },
        {
            "name": "merchantVoid",
            "baseName": "merchantVoid",
            "type": "boolean"
        },
        {
            "name": "shopperApproved",
            "baseName": "shopperApproved",
            "type": "boolean"
        },
        {
            "name": "shopperCancelled",
            "baseName": "shopperCancelled",
            "type": "boolean"
        },
        {
            "name": "shopperCaptureApproved",
            "baseName": "shopperCaptureApproved",
            "type": "boolean"
        },
        {
            "name": "shopperCaptureRefused",
            "baseName": "shopperCaptureRefused",
            "type": "boolean"
        },
        {
            "name": "shopperRefundApproved",
            "baseName": "shopperRefundApproved",
            "type": "boolean"
        },
        {
            "name": "shopperRefundRefused",
            "baseName": "shopperRefundRefused",
            "type": "boolean"
        },
        {
            "name": "shopperRefused",
            "baseName": "shopperRefused",
            "type": "boolean"
        },
        {
            "name": "shopperVoid",
            "baseName": "shopperVoid",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ReceiptPrinting.attributeTypeMap;
    }
}

