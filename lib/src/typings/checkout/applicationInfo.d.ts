import { CommonField } from './commonField';
import { ExternalPlatform } from './externalPlatform';
import { MerchantDevice } from './merchantDevice';
import { ShopperInteractionDevice } from './shopperInteractionDevice';
export declare class ApplicationInfo {
    'adyenLibrary'?: CommonField;
    'adyenPaymentSource'?: CommonField;
    'externalPlatform'?: ExternalPlatform;
    'merchantApplication'?: CommonField;
    'merchantDevice'?: MerchantDevice;
    'shopperInteractionDevice'?: ShopperInteractionDevice;
}
