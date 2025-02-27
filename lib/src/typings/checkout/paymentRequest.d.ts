import { AccountInfo } from './accountInfo';
import { AchDetails } from './achDetails';
import { Address } from './address';
import { AfterpayDetails } from './afterpayDetails';
import { AmazonPayDetails } from './amazonPayDetails';
import { Amount } from './amount';
import { AndroidPayDetails } from './androidPayDetails';
import { ApplePayDetails } from './applePayDetails';
import { ApplicationInfo } from './applicationInfo';
import { AuthenticationData } from './authenticationData';
import { BacsDirectDebitDetails } from './bacsDirectDebitDetails';
import { BillDeskDetails } from './billDeskDetails';
import { BlikDetails } from './blikDetails';
import { BrowserInfo } from './browserInfo';
import { CardDetails } from './cardDetails';
import { CellulantDetails } from './cellulantDetails';
import { CheckoutOrder } from './checkoutOrder';
import { Company } from './company';
import { DokuDetails } from './dokuDetails';
import { DotpayDetails } from './dotpayDetails';
import { DragonpayDetails } from './dragonpayDetails';
import { EcontextVoucherDetails } from './econtextVoucherDetails';
import { ForexQuote } from './forexQuote';
import { GenericIssuerPaymentMethodDetails } from './genericIssuerPaymentMethodDetails';
import { GiropayDetails } from './giropayDetails';
import { GooglePayDetails } from './googlePayDetails';
import { IdealDetails } from './idealDetails';
import { Installments } from './installments';
import { KlarnaDetails } from './klarnaDetails';
import { LineItem } from './lineItem';
import { Mandate } from './mandate';
import { MasterpassDetails } from './masterpassDetails';
import { MbwayDetails } from './mbwayDetails';
import { MerchantRiskIndicator } from './merchantRiskIndicator';
import { MobilePayDetails } from './mobilePayDetails';
import { MolPayDetails } from './molPayDetails';
import { Name } from './name';
import { OpenInvoiceDetails } from './openInvoiceDetails';
import { PayPalDetails } from './payPalDetails';
import { PayUUpiDetails } from './payUUpiDetails';
import { PayWithGoogleDetails } from './payWithGoogleDetails';
import { PaymentDetails } from './paymentDetails';
import { RatepayDetails } from './ratepayDetails';
import { RiskData } from './riskData';
import { SamsungPayDetails } from './samsungPayDetails';
import { SepaDirectDebitDetails } from './sepaDirectDebitDetails';
import { Split } from './split';
import { StoredPaymentMethodDetails } from './storedPaymentMethodDetails';
import { ThreeDS2RequestData } from './threeDS2RequestData';
import { ThreeDSecureData } from './threeDSecureData';
import { UpiCollectDetails } from './upiCollectDetails';
import { UpiIntentDetails } from './upiIntentDetails';
import { VippsDetails } from './vippsDetails';
import { VisaCheckoutDetails } from './visaCheckoutDetails';
import { WeChatPayDetails } from './weChatPayDetails';
import { WeChatPayMiniProgramDetails } from './weChatPayMiniProgramDetails';
import { ZipDetails } from './zipDetails';
export declare class PaymentRequest {
    'accountInfo'?: AccountInfo;
    /**
    * This field contains additional data, which may be required for a particular payment request.  The `additionalData` object consists of entries, each of which includes the key and value.
    */
    'additionalData'?: {
        [key: string]: string;
    };
    'amount': Amount;
    'applicationInfo'?: ApplicationInfo;
    'authenticationData'?: AuthenticationData;
    'billingAddress'?: Address;
    'browserInfo'?: BrowserInfo;
    /**
    * The delay between the authorisation and scheduled auto-capture, specified in hours.
    */
    'captureDelayHours'?: number;
    /**
    * The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.  Possible values: * iOS * Android * Web
    */
    'channel'?: PaymentRequest.ChannelEnum;
    /**
    * Checkout attempt ID that corresponds to the Id generated for tracking user payment journey.
    */
    'checkoutAttemptId'?: string;
    'company'?: Company;
    /**
    * Conversion ID that corresponds to the Id generated for tracking user payment journey.
    */
    'conversionId'?: string;
    /**
    * The shopper country.  Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Example: NL or DE
    */
    'countryCode'?: string;
    /**
    * The shopper\'s date of birth.  Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
    */
    'dateOfBirth'?: Date;
    'dccQuote'?: ForexQuote;
    'deliveryAddress'?: Address;
    /**
    * The date and time the purchased goods should be delivered.  Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD  Example: 2017-07-17T13:42:40.428+01:00
    */
    'deliveryDate'?: Date;
    /**
    * A string containing the shopper\'s device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
    */
    'deviceFingerprint'?: string;
    /**
    * When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments.
    */
    'enableOneClick'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be tokenized for payouts.
    */
    'enablePayOut'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be tokenized for recurring payments.
    */
    'enableRecurring'?: boolean;
    /**
    * The type of the entity the payment is processed for.
    */
    'entityType'?: PaymentRequest.EntityTypeEnum;
    /**
    * An integer value that is added to the normal fraud score. The value can be either positive or negative.
    */
    'fraudOffset'?: number;
    'installments'?: Installments;
    /**
    * Price and product information about the purchased items, to be included on the invoice sent to the shopper. > This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, Zip and Atome.
    */
    'lineItems'?: Array<LineItem>;
    'mandate'?: Mandate;
    /**
    * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
    */
    'mcc'?: string;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    /**
    * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle. The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations. > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
    */
    'merchantOrderReference'?: string;
    'merchantRiskIndicator'?: MerchantRiskIndicator;
    /**
    * Metadata consists of entries, each of which includes a key and a value. Limits: * Maximum 20 key-value pairs per request. When exceeding, the \"177\" error occurs: \"Metadata size exceeds limit\". * Maximum 20 characters per key. * Maximum 80 characters per value.
    */
    'metadata'?: {
        [key: string]: string;
    };
    'mpiData'?: ThreeDSecureData;
    'order'?: CheckoutOrder;
    /**
    * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
    */
    'orderReference'?: string;
    /**
    * Required for the 3D Secure 2 `channel` **Web** integration.  Set this parameter to the origin URL of the page that you are loading the 3D Secure Component from.
    */
    'origin'?: string;
    /**
    * The type and required details of a payment method to use.
    */
    'paymentMethod': AchDetails | AfterpayDetails | AmazonPayDetails | AndroidPayDetails | ApplePayDetails | BacsDirectDebitDetails | BillDeskDetails | BlikDetails | CardDetails | CellulantDetails | DokuDetails | DotpayDetails | DragonpayDetails | EcontextVoucherDetails | GenericIssuerPaymentMethodDetails | GiropayDetails | GooglePayDetails | IdealDetails | KlarnaDetails | MasterpassDetails | MbwayDetails | MobilePayDetails | MolPayDetails | OpenInvoiceDetails | PayPalDetails | PayUUpiDetails | PayWithGoogleDetails | PaymentDetails | RatepayDetails | SamsungPayDetails | SepaDirectDebitDetails | StoredPaymentMethodDetails | UpiCollectDetails | UpiIntentDetails | VippsDetails | VisaCheckoutDetails | WeChatPayDetails | WeChatPayMiniProgramDetails | ZipDetails;
    /**
    * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
    */
    'recurringExpiry'?: string;
    /**
    * Minimum number of days between authorisations. Only for 3D Secure 2.
    */
    'recurringFrequency'?: string;
    /**
    * Defines a recurring payment type. Allowed values: * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule. * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction. * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder\'s balance drops below a certain amount.
    */
    'recurringProcessingModel'?: PaymentRequest.RecurringProcessingModelEnum;
    /**
    * Specifies the redirect method (GET or POST) when redirecting back from the issuer.
    */
    'redirectFromIssuerMethod'?: string;
    /**
    * Specifies the redirect method (GET or POST) when redirecting to the issuer.
    */
    'redirectToIssuerMethod'?: string;
    /**
    * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
    */
    'reference': string;
    /**
    * The URL to return to in case of a redirection. The format depends on the channel. This URL can have a maximum of 1024 characters. * For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number. Example: `https://your-company.com/checkout?shopperOrder=12xy` * For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app). Example: `my-app://` * For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters). Example: `my-app://your.package.name`
    */
    'returnUrl': string;
    'riskData'?: RiskData;
    /**
    * The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.  For example: 2020-07-18T15:42:40.428+01:00
    */
    'sessionValidity'?: string;
    /**
    * The shopper\'s email address. We recommend that you provide this data, as it is used in velocity fraud checks. > For 3D Secure 2 transactions, schemes require `shopperEmail` for all browser-based and mobile implementations.
    */
    'shopperEmail'?: string;
    /**
    * The shopper\'s IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks). > For 3D Secure 2 transactions, schemes require `shopperIP` for all browser-based implementations. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
    */
    'shopperIP'?: string;
    /**
    * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.  This field has the following possible values: * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request. * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment). * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone. * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
    */
    'shopperInteraction'?: PaymentRequest.ShopperInteractionEnum;
    /**
    * The combination of a language code and a country code to specify the language to be used in the payment.
    */
    'shopperLocale'?: string;
    'shopperName'?: Name;
    /**
    * Required for recurring payments.  Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters. > Your reference must not include personally identifiable information (PII), for example name or email address.
    */
    'shopperReference'?: string;
    /**
    * The text to be shown on the shopper\'s bank statement.  We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.  Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , \' _ - ? + * /_**.
    */
    'shopperStatement'?: string;
    /**
    * The shopper\'s social security number.
    */
    'socialSecurityNumber'?: string;
    /**
    * An array of objects specifying how the payment should be split when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information) or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).
    */
    'splits'?: Array<Split>;
    /**
    * The ecommerce or point-of-sale store that is processing the payment. Used in [partner arrangement integrations](https://docs.adyen.com/platforms/platforms-for-partners#route-payments) for Adyen for Platforms.
    */
    'store'?: string;
    /**
    * When true and `shopperReference` is provided, the payment details will be stored.
    */
    'storePaymentMethod'?: boolean;
    /**
    * The shopper\'s telephone number.
    */
    'telephoneNumber'?: string;
    'threeDS2RequestData'?: ThreeDS2RequestData;
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
    */
    'threeDSAuthenticationOnly'?: boolean;
    /**
    * Set to true if the payment should be routed to a trusted MID.
    */
    'trustedShopper'?: boolean;
}
export declare namespace PaymentRequest {
    enum ChannelEnum {
        IOS,
        Android,
        Web
    }
    enum EntityTypeEnum {
        NaturalPerson,
        CompanyName
    }
    enum RecurringProcessingModelEnum {
        CardOnFile,
        Subscription,
        UnscheduledCardOnFile
    }
    enum ShopperInteractionEnum {
        Ecommerce,
        ContAuth,
        Moto,
        POS
    }
}
