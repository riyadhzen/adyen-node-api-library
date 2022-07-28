export declare class DeviceRenderOptions {
    /**
    * Supported SDK interface types. Allowed values: * native * html * both
    */
    'sdkInterface'?: DeviceRenderOptions.SdkInterfaceEnum;
    /**
    * UI types supported for displaying specific challenges. Allowed values: * text * singleSelect * outOfBand * otherHtml * multiSelect
    */
    'sdkUiType'?: Array<DeviceRenderOptions.SdkUiTypeEnum>;
}
export declare namespace DeviceRenderOptions {
    enum SdkInterfaceEnum {
        Native,
        Html,
        Both
    }
    enum SdkUiTypeEnum {
        MultiSelect,
        OtherHtml,
        OutOfBand,
        SingleSelect,
        Text
    }
}
