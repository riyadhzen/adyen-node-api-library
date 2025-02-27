import { Amount } from './amount';
import { FraudResult } from './fraudResult';
export declare class CheckoutCreateOrderResponse {
    /**
    * Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**.
    */
    'additionalData'?: {
        [key: string]: string;
    };
    'amount': Amount;
    /**
    * The date that the order will expire.
    */
    'expiresAt': string;
    'fraudResult'?: FraudResult;
    /**
    * The encrypted data that will be used by merchant for adding payments to the order.
    */
    'orderData': string;
    /**
    * Adyen\'s 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference'?: string;
    /**
    * The reference provided by merchant for creating the order.
    */
    'reference'?: string;
    /**
    * If the payment\'s authorisation is refused or an error occurs during authorisation, this field holds Adyen\'s mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.  For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
    */
    'refusalReason'?: string;
    'remainingAmount': Amount;
    /**
    * The result of the order creation request.  The value is always **Success**.
    */
    'resultCode': CheckoutCreateOrderResponse.ResultCodeEnum;
}
export declare namespace CheckoutCreateOrderResponse {
    enum ResultCodeEnum {
        Success
    }
}
