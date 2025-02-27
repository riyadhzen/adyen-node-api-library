export declare class AdditionalDataRisk {
    /**
    * The data for your custom risk field. For more information, refer to [Create custom risk fields](https://docs.adyen.com/risk-management/configure-custom-risk-rules#step-1-create-custom-risk-fields).
    */
    'riskdataCustomFieldName'?: string;
    /**
    * The price of item in the basket, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    'riskdataBasketItemItemNrAmountPerItem'?: string;
    /**
    * Brand of the item.
    */
    'riskdataBasketItemItemNrBrand'?: string;
    /**
    * Category of the item.
    */
    'riskdataBasketItemItemNrCategory'?: string;
    /**
    * Color of the item.
    */
    'riskdataBasketItemItemNrColor'?: string;
    /**
    * The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).
    */
    'riskdataBasketItemItemNrCurrency'?: string;
    /**
    * ID of the item.
    */
    'riskdataBasketItemItemNrItemID'?: string;
    /**
    * Manufacturer of the item.
    */
    'riskdataBasketItemItemNrManufacturer'?: string;
    /**
    * A text description of the product the invoice line refers to.
    */
    'riskdataBasketItemItemNrProductTitle'?: string;
    /**
    * Quantity of the item purchased.
    */
    'riskdataBasketItemItemNrQuantity'?: string;
    /**
    * Email associated with the given product in the basket (usually in electronic gift cards).
    */
    'riskdataBasketItemItemNrReceiverEmail'?: string;
    /**
    * Size of the item.
    */
    'riskdataBasketItemItemNrSize'?: string;
    /**
    * [Stock keeping unit](https://en.wikipedia.org/wiki/Stock_keeping_unit).
    */
    'riskdataBasketItemItemNrSku'?: string;
    /**
    * [Universal Product Code](https://en.wikipedia.org/wiki/Universal_Product_Code).
    */
    'riskdataBasketItemItemNrUpc'?: string;
    /**
    * Code of the promotion.
    */
    'riskdataPromotionsPromotionItemNrPromotionCode'?: string;
    /**
    * The discount amount of the promotion, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    'riskdataPromotionsPromotionItemNrPromotionDiscountAmount'?: string;
    /**
    * The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).
    */
    'riskdataPromotionsPromotionItemNrPromotionDiscountCurrency'?: string;
    /**
    * Promotion\'s percentage discount. It is represented in percentage value and there is no need to include the \'%\' sign.  e.g. for a promotion discount of 30%, the value of the field should be 30.
    */
    'riskdataPromotionsPromotionItemNrPromotionDiscountPercentage'?: string;
    /**
    * Name of the promotion.
    */
    'riskdataPromotionsPromotionItemNrPromotionName'?: string;
    /**
    * Reference number of the risk profile that you want to apply to the payment. If not provided or left blank, the merchant-level account\'s default risk profile will be applied to the payment. For more information, see [dynamically assign a risk profile to a payment](https://docs.adyen.com/risk-management/create-and-use-risk-profiles#dynamically-assign-a-risk-profile-to-a-payment).
    */
    'riskdataRiskProfileReference'?: string;
    /**
    * If this parameter is provided with the value **true**, risk checks for the payment request are skipped and the transaction will not get a risk score.
    */
    'riskdataSkipRisk'?: string;
}
