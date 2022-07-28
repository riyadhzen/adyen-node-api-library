import { Amount } from './amount';
import { CheckoutOrder } from './checkoutOrder';
export declare class PaymentMethodsRequest {
    /**
    * This field contains additional data, which may be required for a particular payment request.  The `additionalData` object consists of entries, each of which includes the key and value.
    */
    'additionalData'?: {
        [key: string]: string;
    };
    /**
    * List of payment methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).  Example: `\"allowedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'allowedPaymentMethods'?: Array<string>;
    'amount'?: Amount;
    /**
    * List of payment methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).  Example: `\"blockedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'blockedPaymentMethods'?: Array<string>;
    /**
    * The platform where a payment transaction takes place. This field can be used for filtering out payment methods that are only available on specific platforms. Possible values: * iOS * Android * Web
    */
    'channel'?: PaymentMethodsRequest.ChannelEnum;
    /**
    * The shopper\'s country code.
    */
    'countryCode'?: string;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    'order'?: CheckoutOrder;
    /**
    * The combination of a language code and a country code to specify the language to be used in the payment.
    */
    'shopperLocale'?: string;
    /**
    * Required for recurring payments.  Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters. > Your reference must not include personally identifiable information (PII), for example name or email address.
    */
    'shopperReference'?: string;
    /**
    * Boolean value indicating whether the card payment method should be split into separate debit and credit options.
    */
    'splitCardFundingSources'?: boolean;
    /**
    * The ecommerce or point-of-sale store that is processing the payment. Used in [partner arrangement integrations](https://docs.adyen.com/platforms/platforms-for-partners#route-payments) for Adyen for Platforms.
    */
    'store'?: string;
}
export declare namespace PaymentMethodsRequest {
    enum ChannelEnum {
        IOS,
        Android,
        Web
    }
}
