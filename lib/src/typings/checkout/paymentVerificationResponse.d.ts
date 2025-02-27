import { CheckoutOrderResponse } from './checkoutOrderResponse';
import { FraudResult } from './fraudResult';
import { ServiceError2 } from './serviceError2';
export declare class PaymentVerificationResponse {
    /**
    * Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**.
    */
    'additionalData'?: {
        [key: string]: string;
    };
    'fraudResult'?: FraudResult;
    /**
    * A unique value that you provided in the initial `/paymentSession` request as a `reference` field.
    */
    'merchantReference': string;
    'order'?: CheckoutOrderResponse;
    /**
    * Adyen\'s 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference'?: string;
    /**
    * If the payment\'s authorisation is refused or an error occurs during authorisation, this field holds Adyen\'s mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.  For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
    */
    'refusalReason'?: string;
    /**
    * Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
    */
    'refusalReasonCode'?: string;
    /**
    * The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).  Possible values:  * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions. * **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication. Returned for [standalone authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state. * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state. * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions. * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state. * **IdentifyShopper** – The issuer requires the shopper\'s device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions. * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment. * **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment. * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments. * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation. * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
    */
    'resultCode'?: PaymentVerificationResponse.ResultCodeEnum;
    'serviceError'?: ServiceError2;
    /**
    * The shopperLocale value provided in the payment request.
    */
    'shopperLocale': string;
}
export declare namespace PaymentVerificationResponse {
    enum ResultCodeEnum {
        AuthenticationFinished,
        Authorised,
        Cancelled,
        ChallengeShopper,
        Error,
        IdentifyShopper,
        Pending,
        PresentToShopper,
        Received,
        RedirectShopper,
        Refused,
        Success
    }
}
