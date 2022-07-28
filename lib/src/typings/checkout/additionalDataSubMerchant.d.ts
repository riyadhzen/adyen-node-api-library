export declare class AdditionalDataSubMerchant {
    /**
    * Required for transactions performed by registered payment facilitators. Indicates the number of sub-merchants contained in the request. For example, **3**.
    */
    'subMerchantNumberOfSubSellers'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The city of the sub-merchant\'s address. * Format: Alphanumeric * Maximum length: 13 characters
    */
    'subMerchantSubSellerSubSellerNrCity'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The three-letter country code of the sub-merchant\'s address. For example, **BRA** for Brazil.  * Format: [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) * Fixed length: 3 characters
    */
    'subMerchantSubSellerSubSellerNrCountry'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. A unique identifier that you create for the sub-merchant, used by schemes to identify the sub-merchant.  * Format: Alphanumeric * Maximum length: 15 characters
    */
    'subMerchantSubSellerSubSellerNrId'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The sub-merchant\'s 4-digit Merchant Category Code (MCC).  * Format: Numeric * Fixed length: 4 digits
    */
    'subMerchantSubSellerSubSellerNrMcc'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement  that will appear in the card statement. * Format: Alphanumeric * Maximum length: 22 characters
    */
    'subMerchantSubSellerSubSellerNrName'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The postal code of the sub-merchant\'s address, without dashes. * Format: Numeric * Fixed length: 8 digits
    */
    'subMerchantSubSellerSubSellerNrPostalCode'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The state code of the sub-merchant\'s address, if applicable to the country. * Format: Alphanumeric * Maximum length: 2 characters
    */
    'subMerchantSubSellerSubSellerNrState'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The street name and house number of the sub-merchant\'s address. * Format: Alphanumeric * Maximum length: 60 characters
    */
    'subMerchantSubSellerSubSellerNrStreet'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The tax ID of the sub-merchant. * Format: Numeric * Fixed length: 11 digits for the CPF or 14 digits for the CNPJ
    */
    'subMerchantSubSellerSubSellerNrTaxId'?: string;
}
