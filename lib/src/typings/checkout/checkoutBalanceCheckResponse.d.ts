import { Amount } from './amount';
import { FraudResult } from './fraudResult';
export declare class CheckoutBalanceCheckResponse {
    /**
    * Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**.
    */
    'additionalData'?: {
        [key: string]: string;
    };
    'balance': Amount;
    'fraudResult'?: FraudResult;
    /**
    * Adyen\'s 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference'?: string;
    /**
    * If the payment\'s authorisation is refused or an error occurs during authorisation, this field holds Adyen\'s mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.  For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
    */
    'refusalReason'?: string;
    /**
    * The result of the cancellation request.  Possible values:  * **Success** – Indicates that the balance check was successful. * **NotEnoughBalance** – Commonly indicates that the card did not have enough balance to pay the amount in the request, or that the currency of the balance on the card did not match the currency of the requested amount. * **Failed** – Indicates that the balance check failed.
    */
    'resultCode': CheckoutBalanceCheckResponse.ResultCodeEnum;
    'transactionLimit'?: Amount;
}
export declare namespace CheckoutBalanceCheckResponse {
    enum ResultCodeEnum {
        Success,
        NotEnoughBalance,
        Failed
    }
}
