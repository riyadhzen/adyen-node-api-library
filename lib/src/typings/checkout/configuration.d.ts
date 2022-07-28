import { Avs } from './avs';
import { InstallmentsNumber } from './installmentsNumber';
import { ShopperInput } from './shopperInput';
export declare class Configuration {
    'avs'?: Avs;
    /**
    * Determines whether the cardholder name should be provided or not.  Permitted values: * NONE * OPTIONAL * REQUIRED
    */
    'cardHolderName'?: Configuration.CardHolderNameEnum;
    'installments'?: InstallmentsNumber;
    'shopperInput'?: ShopperInput;
}
export declare namespace Configuration {
    enum CardHolderNameEnum {
        NONE,
        OPTIONAL,
        REQUIRED
    }
}
